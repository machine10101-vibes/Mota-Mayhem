const KEY = 'mm-save-v1';

let boundAddress = null;

export function saveKey(address = boundAddress) {
  return address ? `${KEY}:${address}` : KEY;
}

function read(key) {
  try {
    const data = JSON.parse(localStorage.getItem(key) || 'null');
    if (!data || data.v !== 1) return null;
    return data;
  } catch {
    return null;
  }
}

export function loadSave() {
  return read(saveKey());
}

/**
 * Bind the garden to an account id.
 * `loaded` means this browser already had that account's garden.
 * `claimed` means an older unsigned garden was moved onto the account.
 * `new` means this account is starting fresh here.
 */
export function adoptAddress(address) {
  boundAddress = address;
  const own = read(saveKey(address));
  if (own) return { note: 'loaded', save: own };
  const anon = read(KEY);
  if (anon) {
    try {
      localStorage.setItem(saveKey(address), JSON.stringify(anon));
      localStorage.removeItem(KEY);
    } catch {
      /* keep the unsigned garden if storage cannot be updated */
    }
    return { note: 'claimed', save: anon };
  }
  return { note: 'new', save: null };
}

export function unbindAddress() {
  boundAddress = null;
}

export function writeSave(data, stamp = true) {
  const body = { v: 1, ...data };
  if (stamp || !Number.isFinite(Number(body.savedAt))) body.savedAt = Date.now();
  try {
    localStorage.setItem(saveKey(), JSON.stringify(body));
    return body;
  } catch {
    return null;
  }
}

export function clearSave() {
  try {
    localStorage.removeItem(saveKey());
  } catch {
    /* private mode */
  }
}
