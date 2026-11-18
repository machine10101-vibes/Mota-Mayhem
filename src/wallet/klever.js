import { verifyKleverSignature } from './verify.js';

export const SESSION_KEY = 'mm-klever-session';
const PROMPT_LOCK = 'mm-klever-prompt-lock';
const PROMPT_COOL_MS = 90_000;
export const KLEVER_EXTENSION = 'https://chromewebstore.google.com/detail/klever-wallet/ifclboecfhkjbpmhgehodcjpciihhmif';
export const KLEVER_ANDROID = 'https://play.google.com/store/apps/details?id=finance.klever.bitcoin.wallet';
export const KLEVER_IOS = 'https://apps.apple.com/app/klever-wallet-bitcoin-crypto/id1615064243';

const ADDRESS_RE = /^klv1[02-9ac-hj-np-z]{20,}$/;
let signingInFlight = false;

export function isMobile() {
  const ua = navigator.userAgent || '';
  if (/Android|iPhone|iPad|iPod/i.test(ua)) return true;
  return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
}

export function shortAddress(address) {
  if (!address || address.length < 16) return address || '';
  return `${address.slice(0, 8)}…${address.slice(-6)}`;
}

export function pageUrl() {
  const url = new URL(location.href);
  url.searchParams.set('klever', '1');
  url.hash = '';
  return url.toString();
}

function fail(code, message) {
  const err = new Error(message);
  err.code = code;
  return err;
}

export function signatureText(signed, depth = 0, allowBareString = true) {
  if (signed == null || depth > 8) return '';
  if (typeof signed === 'string') {
    const trimmed = signed.trim();
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
      try {
        return signatureText(JSON.parse(trimmed), depth + 1, false);
      } catch {
        return '';
      }
    }
    // Direct signMessage() results are strings. Ignore arbitrary echoed message
    // text when walking an event object so it cannot be mistaken for a signature.
    return allowBareString ? trimmed : '';
  }
  if (ArrayBuffer.isView(signed) && signed.byteLength === 64) {
    return [...new Uint8Array(signed.buffer, signed.byteOffset, signed.byteLength)]
      .map((byte) => byte.toString(16).padStart(2, '0')).join('');
  }
  if (Array.isArray(signed)) {
    if (signed.length === 64 && signed.every((byte) => Number.isInteger(byte) && byte >= 0 && byte <= 255)) {
      return signed.map((byte) => byte.toString(16).padStart(2, '0')).join('');
    }
    for (const item of signed) {
      const found = signatureText(item, depth + 1);
      if (found) return found;
    }
    return '';
  }
  if (typeof signed !== 'object') return '';

  // Klever Connect SDK Signature objects expose `bytes` and `hex`; older
  // wallet responses may instead wrap the proof in signature/sig fields.
  // Never read an event's "message" field: it is only the echoed challenge.
  for (const key of ['signature', 'sig', 'hex', 'bytes']) {
    if (signed[key] != null) {
      const found = signatureText(signed[key], depth + 1, true);
      if (found) return found;
    }
  }
  if (typeof signed.toHex === 'function') {
    const found = signatureText(signed.toHex(), depth + 1, true);
    if (found) return found;
  }
  for (const key of ['result', 'data', 'response', 'payload']) {
    if (signed[key] != null) {
      const found = signatureText(signed[key], depth + 1, false);
      if (found) return found;
    }
  }
  return '';
}

/** True when this page already asked the wallet a moment ago. Stops a reload from asking again. */
export function promptIsCooling() {
  try {
    const at = Number(localStorage.getItem(PROMPT_LOCK) || 0);
    return Number.isFinite(at) && Date.now() - at < PROMPT_COOL_MS;
  } catch {
    return false;
  }
}

export function markPrompt() {
  try {
    localStorage.setItem(PROMPT_LOCK, String(Date.now()));
  } catch {
    /* the request still proceeds */
  }
}

/**
 * Klever closes a confirm sheet when the page under it changes size. Pin the
 * layout to the height it had before the sheet opened, and release it after.
 */
function holdPageStill() {
  const h = `${Math.round(window.innerHeight)}px`;
  document.documentElement.style.setProperty('--sign-lock-h', h);
  document.documentElement.classList.add('wallet-signing');
}

function releasePageHold() {
  document.documentElement.classList.remove('wallet-signing');
  document.documentElement.style.removeProperty('--sign-lock-h');
}

/**
 * The installed app's own signMessage opens a message sheet inside the browser
 * and leaves it up until Confirm. The newer page bridge opens a separate PIN
 * screen that the app dismisses as soon as fingerprint starts, so that bridge
 * is only used when the message sheet is not there.
 */
function legacySignMessage(message) {
  const wallet = window.kleverWallet;
  const events = window.kleverWalletEvents;
  if (typeof wallet?.handleTransaction !== 'function') return null;
  if (typeof events?.createEvent !== 'function' || typeof events.addEventListener !== 'function') return null;
  return new Promise((resolve, reject) => {
    const event = events.createEvent({
      chain: 'KLEVER',
      type: 'SIGN_MESSAGE',
      transactionInfo: {
        siteUrl: location.href,
        hostname: location.hostname,
      },
      preTransaction: message,
    });
    events.addEventListener(event.id, (result) => {
      const data = result?.data;
      if (data?.status === 'ACCEPTED') resolve(result);
      else reject(fail('rejected', 'The Klever app closed the sign-in request.'));
    });
    wallet.handleTransaction(JSON.stringify(event));
  });
}

async function requestSignature(kw, message) {
  // Use the SDK's supported message-signing API whenever it exists. Do not
  // also dispatch a legacy event after this request: that can open a second
  // approval sheet while the first one is still active.
  if (typeof kw?.signMessage === 'function') return kw.signMessage(message);

  // Older in-app browser builds expose only the event interface.
  const legacy = legacySignMessage(message);
  if (legacy) return legacy;

  const bridge = window.__kleverBrowser__?.bridge;
  if (typeof bridge === 'function') {
    return bridge({
      type: 'SIGN_IN_MESSAGE',
      network: 'KLV',
      chainId: '38',
      data: message,
      url: location.href,
    });
  }
  throw fail('unsupported', 'This Klever Wallet version does not support message signing. Please update Klever Wallet and try again.');
}

export function waitForProvider(ms = 2000) {
  const start = performance.now();
  return new Promise((resolve) => {
    const tick = () => {
      if (window.kleverWeb) {
        resolve(window.kleverWeb);
        return;
      }
      if (performance.now() - start >= ms) {
        resolve(null);
        return;
      }
      setTimeout(tick, 80);
    };
    tick();
  });
}

async function connectProvider(kw, mobile) {
  try {
    if (window.kleverHub && typeof window.kleverHub.initialize === 'function') await window.kleverHub.initialize();
    else if (typeof kw.initialize === 'function') await kw.initialize();
  } catch {
    /* A wallet that is already connected rejects a second initialize. */
  }
  const address = typeof kw.getWalletAddress === 'function' ? kw.getWalletAddress() : kw.address;
  if (!ADDRESS_RE.test(address || '')) {
    throw fail(
      'no-account',
      mobile
        ? 'Choose a Klever account in the app, then connect again.'
        : 'Open the Klever extension, choose an account, then connect again.',
    );
  }
  return address;
}

export async function connectWallet() {
  const mobile = isMobile();
  const kw = await waitForProvider(mobile ? (inKleverHandoff() ? 4000 : 900) : 2500);
  if (!kw) {
    throw fail(
      mobile ? 'mobile-app' : 'extension',
      mobile
        ? 'Open this page in the Klever Wallet app. The app will ask you to approve the connection.'
        : 'Install the Klever Wallet extension, then press Connect wallet in Settings.',
    );
  }
  const address = await connectProvider(kw, mobile);
  return { kw, address, mobile };
}

function connectMessage(address, nonce, issued) {
  return [
    'Mota Mayhem wants you to connect your Klever wallet.',
    'This does not send any coins.',
    `Address: ${address}`,
    `Nonce: ${nonce}`,
    `Issued: ${issued}`,
  ].join('\n');
}

/**
 * Asks the Klever extension or app to sign the connect message. The signature
 * is checked against the address before the wallet is linked to this account.
 */
export async function signProof(nonce, address, kw, mobile = isMobile()) {
  if (signingInFlight) {
    throw fail('busy', 'A Klever signature request is already in progress. Please wait for it to finish.');
  }
  signingInFlight = true;
  holdPageStill();
  try {
    const message = connectMessage(address, nonce, new Date().toISOString());
    let signed;
    try {
      if (document.activeElement && document.activeElement !== document.body) document.activeElement.blur();
      signed = await requestSignature(kw, message);
    } catch (err) {
      if (err?.code === 'rejected' || err?.code === 'unsupported') throw err;
      throw fail('rejected', mobile ? 'The Klever app closed the connection request.' : 'The Klever extension closed the connection request.');
    }
    const signature = signatureText(signed);
    if (!signature) {
      throw fail('bad-signature', 'Klever returned an empty signature. Please try again.');
    }
    if (!verifyKleverSignature(message, signature, address)) {
      throw fail('bad-signature', 'The signature does not match this Klever address.');
    }
    return { address, message, signature, nonce };
  } finally {
    releasePageHold();
    signingInFlight = false;
  }
}

/** Connects the Klever account and signs the message that links it to this garden. */
export async function signIn() {
  const { kw, address, mobile } = await connectWallet();
  const nonceBytes = crypto.getRandomValues(new Uint8Array(16));
  const nonce = [...nonceBytes].map((b) => b.toString(16).padStart(2, '0')).join('');
  const proof = await signProof(nonce, address, kw, mobile);
  const session = { address: proof.address, message: proof.message, signature: proof.signature, at: Date.now() };
  saveSession(session);
  return session;
}

function saveSession(session) {
  const text = JSON.stringify(session);
  for (const store of [sessionStorage, localStorage]) {
    try {
      store.setItem(SESSION_KEY, text);
    } catch {
      /* private mode can refuse one of the stores */
    }
  }
}

function storedSession() {
  for (const store of [sessionStorage, localStorage]) {
    try {
      const raw = JSON.parse(store.getItem(SESSION_KEY) || 'null');
      if (raw) return raw;
    } catch {
      /* try the other store */
    }
  }
  return null;
}

/** A reload keeps the signature, including when the wallet restarts its browser. */
export function readSession() {
  try {
    const raw = storedSession();
    if (!raw) return null;
    const ok = ADDRESS_RE.test(raw.address)
      && typeof raw.message === 'string'
      && typeof raw.signature === 'string'
      && raw.message.includes(`Address: ${raw.address}`)
      && verifyKleverSignature(raw.message, raw.signature, raw.address);
    if (!ok) {
      for (const store of [sessionStorage, localStorage]) {
        try { store.removeItem(SESSION_KEY); } catch { /* already gone */ }
      }
      return null;
    }
    saveSession(raw);
    return raw;
  } catch {
    return null;
  }
}

/** Drops a Klever login without clearing the connect-wallet prompt lock. */
export function clearKleverLogin() {
  for (const store of [sessionStorage, localStorage]) {
    try {
      store.removeItem(SESSION_KEY);
    } catch {
      /* already gone */
    }
  }
}

export function clearSession() {
  clearKleverLogin();
  for (const store of [sessionStorage, localStorage]) {
    try {
      store.removeItem(PROMPT_LOCK);
    } catch {
      /* already gone */
    }
  }
}

const KLEVER_PACKAGE = 'finance.klever.bitcoin.wallet';

/**
 * Link the installed Klever Wallet opens in its own browser.
 * Wallet 5.x registers scheme `klever-wallet` with host `dp`, and its browser
 * handler reads the `link` query. A scheme the app does not register makes
 * Chrome on Android open the Play Store listing even when the app is installed.
 */
export function kleverLaunchUrl(page, android) {
  const link = encodeURIComponent(page);
  if (!android) return `klever-wallet://dp/browser?link=${link}`;
  return `intent://dp/browser?link=${link}#Intent;scheme=klever-wallet;package=${KLEVER_PACKAGE};end`;
}

/** Hands this page to the Klever Wallet app so it can ask for the signature. */
export function launchKleverApp() {
  const android = /Android/i.test(navigator.userAgent);
  const ios = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (!android && !ios) return false;
  location.href = kleverLaunchUrl(pageUrl(), android);
  return true;
}

/** True once this visit was opened from the wallet handoff, or is already inside it. */
export function inKleverHandoff() {
  if (window.kleverWeb) return true;
  if (/Klever/i.test(navigator.userAgent || '')) return true;
  try {
    return new URLSearchParams(location.search).get('klever') === '1';
  } catch {
    return false;
  }
}

export async function copyPageUrl() {
  const url = pageUrl();
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch {
    const input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);
    input.select();
    let ok = false;
    try {
      ok = document.execCommand('copy');
    } catch {
      ok = false;
    }
    input.remove();
    return ok;
  }
}

function actionButton(text, onClick) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'wallet-mini';
  btn.textContent = text;
  btn.addEventListener('click', onClick);
  return btn;
}

function storeLink(href, text) {
  const a = document.createElement('a');
  a.className = 'wallet-mini';
  a.href = href;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = text;
  return a;
}

/** Fills the title-screen help shown when the extension or the mobile app is not connected yet. */
export function showWalletHelp(el, kind) {
  el.replaceChildren();
  el.classList.remove('hidden');
  const p = document.createElement('p');
  const actions = document.createElement('div');
  actions.className = 'wallet-actions';
  if (kind === 'mobile-app') {
    p.textContent = 'Connect wallet opens the Klever Wallet installed on this phone and asks you to approve the signature there. Install the app below only if it is not on this phone.';
    if (isMobile()) actions.append(actionButton('Open Klever Wallet', () => launchKleverApp()));
    actions.append(
      actionButton('Copy page link', async (ev) => {
        const ok = await copyPageUrl();
        ev.currentTarget.textContent = ok ? 'Link copied' : 'Copy failed';
      }),
      storeLink(KLEVER_ANDROID, 'Google Play'),
      storeLink(KLEVER_IOS, 'App Store'),
    );
  } else {
    p.textContent = 'On a computer, the Klever Wallet extension asks you to approve the connection. Install it, refresh this page, and press Connect wallet again.';
    actions.append(storeLink(KLEVER_EXTENSION, 'Install the Klever extension'));
  }
  el.append(p, actions);
}
