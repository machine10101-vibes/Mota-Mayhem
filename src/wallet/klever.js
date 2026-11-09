import { verifyKleverSignature } from './verify.js';

export const SESSION_KEY = 'mm-klever-session';
export const KLEVER_EXTENSION = 'https://chromewebstore.google.com/detail/klever-wallet/ifclboecfhkjbpmhgehodcjpciihhmif';
export const KLEVER_ANDROID = 'https://play.google.com/store/apps/details?id=finance.klever.bitcoin.wallet';
export const KLEVER_IOS = 'https://apps.apple.com/app/klever-wallet-bitcoin-crypto/id1615064243';

const ADDRESS_RE = /^klv1[02-9ac-hj-np-z]{20,}$/;

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

function signatureText(signed) {
  if (signed == null) return '';
  if (typeof signed === 'string') return signed.trim();
  const value = signed.signature || signed.hex || signed.data?.signature || (typeof signed.toHex === 'function' ? signed.toHex() : '');
  return String(value || '').trim();
}

/**
 * The in-app browser's kleverWeb.signMessage sends SIGN_TRANSACTION. A login
 * message is not a transaction, so the app opens the confirm sheet and then
 * closes it. SIGN_IN_MESSAGE keeps that sheet up until the grower taps confirm.
 */
async function requestSignature(kw, message) {
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
  return kw.signMessage(message);
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
        ? 'Choose a Klever account in the app, then sign in again.'
        : 'Open the Klever extension, choose an account, then sign in again.',
    );
  }
  return address;
}

/**
 * Asks the Klever extension (desktop) or the Klever Wallet app (mobile, inside its browser)
 * to sign a login message. The signature is checked against the address before it is trusted.
 */
export async function signIn() {
  const mobile = isMobile();
  const kw = await waitForProvider(mobile ? (inKleverHandoff() ? 4000 : 900) : 2500);
  if (!kw) {
    throw fail(
      mobile ? 'mobile-app' : 'extension',
      mobile
        ? 'Open this page in the Klever Wallet app. The app will ask you to sign.'
        : 'Install the Klever Wallet extension, then sign in from this page.',
    );
  }
  const address = await connectProvider(kw, mobile);
  const nonceBytes = crypto.getRandomValues(new Uint8Array(16));
  const nonce = [...nonceBytes].map((b) => b.toString(16).padStart(2, '0')).join('');
  const message = [
    'Mota Mayhem wants you to sign in with your Klever wallet.',
    'This does not send any coins.',
    `Address: ${address}`,
    `Nonce: ${nonce}`,
    `Issued: ${new Date().toISOString()}`,
  ].join('\n');
  let signed;
  try {
    signed = await requestSignature(kw, message);
  } catch {
    throw fail('rejected', mobile ? 'The Klever app closed the sign-in request.' : 'The Klever extension closed the sign-in request.');
  }
  const signature = signatureText(signed);
  let ok = verifyKleverSignature(message, signature, address);
  // The extension can also check the signature itself. Trust that only when it names this same address.
  if (!ok && typeof kw.validateSignature === 'function') {
    try {
      const res = await kw.validateSignature(message, signature, address);
      const signer = typeof res === 'object' ? res.signer || res.address : '';
      ok = res === true || res?.isValid === true;
      if (ok && signer && signer !== address) ok = false;
    } catch {
      ok = false;
    }
  }
  if (!ok) throw fail('bad-signature', 'The signature does not match this Klever address.');
  const session = { address, message, signature, at: Date.now() };
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    /* private mode can refuse storage; the garden still runs for this page */
  }
  return session;
}

/** A refresh in the same tab keeps the signature. A new visit asks the wallet again. */
export function readSession() {
  try {
    const raw = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
    if (!raw || !ADDRESS_RE.test(raw.address) || typeof raw.message !== 'string' || typeof raw.signature !== 'string') return null;
    if (!verifyKleverSignature(raw.message, raw.signature, raw.address)) return null;
    if (!raw.message.includes(`Address: ${raw.address}`)) return null;
    return raw;
  } catch {
    return null;
  }
}

export function clearSession() {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* already gone */
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
    p.textContent = 'Sign in opens the Klever Wallet installed on this phone and asks you to approve the signature there. Install the app below only if it is not on this phone.';
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
    p.textContent = 'On a computer, the Klever Wallet extension asks you to sign. Install it, refresh this page, and press sign in again.';
    actions.append(storeLink(KLEVER_EXTENSION, 'Install the Klever extension'));
  }
  el.append(p, actions);
}
