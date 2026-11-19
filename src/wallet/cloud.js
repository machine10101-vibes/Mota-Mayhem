/**
 * The garden on Supabase. The browser only talks to the grower function.
 * Without a project URL and publishable key, the garden stays on this browser.
 */

const TOKEN_KEY = 'mm-cloud-token';

let configPromise = null;
let timer = 0;
let pending = null;

function envValue(name) {
  const env = import.meta.env;
  return env && typeof env[name] === 'string' ? env[name].trim() : '';
}

function acceptUrl(url) {
  return /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(url) || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(url);
}

async function readConfigFile(url) {
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    const type = res.headers.get('content-type') || '';
    if (type.includes('text/html')) return null;
    const json = await res.json();
    const fileUrl = String(json?.url || '').trim().replace(/\/$/, '');
    const fileKey = String(json?.key || json?.anonKey || '').trim();
    if (!fileUrl || !fileKey || !acceptUrl(fileUrl)) return null;
    return { url: fileUrl, key: fileKey };
  } catch {
    return null;
  }
}

async function readConfig() {
  const url = envValue('VITE_SUPABASE_URL').replace(/\/$/, '');
  const key = envValue('VITE_SUPABASE_ANON_KEY');
  if (url && key && acceptUrl(url)) return { url, key };
  const candidates = [new URL('supabase.json', document.baseURI).href];
  if (typeof window !== 'undefined') candidates.push(new URL('/supabase.json', window.location.origin).href);
  for (const candidate of candidates) {
    const cfg = await readConfigFile(candidate);
    if (cfg) return cfg;
  }
  return { url: '', key: '' };
}

export function loadCloudConfig() {
  if (!configPromise) configPromise = readConfig();
  return configPromise;
}

export async function cloudEnabled() {
  const cfg = await loadCloudConfig();
  return !!(cfg.url && cfg.key);
}

function readToken(address) {
  try {
    const raw = JSON.parse(sessionStorage.getItem(TOKEN_KEY) || 'null');
    if (raw?.address === address && typeof raw.token === 'string' && Date.parse(raw.expiresAt) > Date.now() + 60_000) {
      return raw.token;
    }
  } catch {
    /* a bad cache just means we sign the session in again */
  }
  return '';
}

function storeToken(address, token, expiresAt) {
  try {
    sessionStorage.setItem(TOKEN_KEY, JSON.stringify({ address, token, expiresAt }));
  } catch {
    /* the token still works until this page closes */
  }
}

export function clearCloudToken() {
  try {
    sessionStorage.removeItem(TOKEN_KEY);
  } catch {
    /* already gone */
  }
}

async function call(body, keepalive = false) {
  const cfg = await loadCloudConfig();
  if (!cfg.url || !cfg.key) return null;
  const res = await fetch(`${cfg.url}/functions/v1/grower`, {
    method: 'POST',
    keepalive,
    headers: {
      'content-type': 'application/json',
      apikey: cfg.key,
      authorization: `Bearer ${cfg.key}`,
    },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json };
}

async function ensureToken(session) {
  const existing = readToken(session.address);
  if (existing) return existing;
  let body;
  if (session.provider === 'email') {
    const { freshAccessToken } = await import('./account.js');
    body = { op: 'auth', provider: 'email', accessToken: await freshAccessToken(session) };
  } else {
    body = {
      op: 'auth',
      address: session.address,
      message: session.message,
      signature: session.signature,
    };
  }
  const res = await call(body);
  if (!res || res.status !== 200 || typeof res.json.token !== 'string') {
    throw new Error(res?.json?.error || 'The garden could not be opened.');
  }
  storeToken(session.address, res.json.token, res.json.expiresAt);
  return res.json.token;
}

async function withToken(session, body, keepalive) {
  const token = await ensureToken(session);
  let res = await call({ ...body, token }, keepalive);
  if (res?.status === 401) {
    clearCloudToken();
    const again = await ensureToken(session);
    res = await call({ ...body, token: again }, keepalive);
  }
  return res;
}

function stamp(data) {
  const garden = { ...data };
  if (!Number.isFinite(Number(garden.savedAt))) garden.savedAt = Date.now();
  return garden;
}

/** Pull the garden saved to this wallet. Null means this wallet has no row yet. */
export async function pullGarden(session) {
  const res = await withToken(session, { op: 'load' }, false);
  if (!res || res.status !== 200) throw new Error(res?.json?.error || 'The garden could not be opened.');
  if (!res.json.garden) return null;
  return {
    garden: res.json.garden,
    revision: Number(res.json.revision) || 0,
    savedAt: Number(res.json.savedAt) || 0,
  };
}

/** Push this garden. A 409 means another device saved a newer one. */
export async function pushGarden(session, data, keepalive = false) {
  const garden = stamp(data);
  if (garden !== data) data.savedAt = garden.savedAt;
  const res = await withToken(session, { op: 'save', garden }, keepalive);
  if (res?.status === 409) {
    return {
      conflict: true,
      garden: res.json.garden,
      revision: Number(res.json.revision) || 0,
      savedAt: Number(res.json.savedAt) || 0,
    };
  }
  if (!res || res.status !== 200) throw new Error(res?.json?.error || 'The garden could not be saved.');
  return { revision: Number(res.json.revision) || 0, savedAt: Number(res.json.savedAt) || 0 };
}

/**
 * Open the garden record and keep whichever garden was saved later.
 * `replaced` means the wallet's remote garden should replace this browser's copy.
 * `gate.open` lets the title screen abandon a slow record without it landing mid-grow.
 */
export async function syncGarden(session, localGarden, gate = { open: true }, seed = null) {
  const cfg = await loadCloudConfig();
  if (!cfg.url || !cfg.key) return { state: 'off', replaced: false, garden: null };
  const remote = await pullGarden(session);
  if (!gate.open) return { state: 'error', replaced: false, garden: null };
  const localAt = Number(localGarden?.savedAt) || 0;
  const remoteAt = Number(remote?.savedAt) || 0;
  if (remote && remoteAt > localAt) {
    return { state: 'on', replaced: true, garden: remote.garden, revision: remote.revision || 0, savedAt: remoteAt };
  }
  const toPush = localGarden || (!remote ? seed : null);
  if (!toPush) return { state: 'on', replaced: false, garden: null, revision: remote?.revision || 0, savedAt: remoteAt };
  const pushed = await pushGarden(session, toPush);
  if (!gate.open) return { state: 'error', replaced: false, garden: null };
  if (pushed.conflict && pushed.garden) {
    return { state: 'on', replaced: true, garden: pushed.garden, revision: pushed.revision || 0, savedAt: Number(pushed.savedAt) || 0 };
  }
  return {
    state: 'on',
    replaced: false,
    seeded: !localGarden,
    garden: toPush,
    revision: pushed.revision || 0,
    savedAt: Number(pushed.savedAt) || Number(toPush.savedAt) || localAt,
  };
}

/** Debounce gameplay saves so a harvest does not write the garden on every tick. */
export function schedulePush(session, data, onDone) {
  pending = {
    session,
    data: JSON.parse(JSON.stringify(data)),
    onDone,
  };
  clearTimeout(timer);
  timer = setTimeout(() => {
    flushCloud();
  }, 1500);
}

export function flushCloud() {
  const job = pending;
  pending = null;
  clearTimeout(timer);
  timer = 0;
  if (!job) return Promise.resolve();
  return pushGarden(job.session, job.data, true)
    .then((result) => {
      job.onDone?.(result);
    })
    .catch(() => {
      job.onDone?.({ error: true });
    });
}
