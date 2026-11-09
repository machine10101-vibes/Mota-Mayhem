/**
 * Google accounts are created by Supabase Auth the first time someone signs in.
 * The garden is stored under g:<user id>, the same way a Klever garden uses its address.
 */

import { loadCloudConfig } from './cloud.js';

const SESSION_KEY = 'mm-google-session';
const VERIFIER_KEY = 'mm-google-verifier';
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export function googleAccountId(id) {
  const clean = String(id || '').trim().toLowerCase();
  return UUID_RE.test(clean) ? `g:${clean}` : '';
}

function fail(message) {
  const err = new Error(message);
  err.code = 'google';
  return err;
}

function b64url(bytes) {
  let text = '';
  for (const b of bytes) text += String.fromCharCode(b);
  return btoa(text).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

async function codeChallenge(verifier) {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
  return b64url(new Uint8Array(digest));
}

/** The page Google should return to. The query is stripped so the code is not nested. */
export function redirectUrl() {
  const url = new URL(location.href);
  url.search = '';
  url.hash = '';
  url.pathname = url.pathname.replace(/index\.html$/i, '');
  return url.toString();
}

export function googleCodePending() {
  try {
    return new URLSearchParams(location.search).has('code');
  } catch {
    return false;
  }
}

export function googleRedirectError() {
  try {
    const query = new URLSearchParams(location.search);
    const hash = new URLSearchParams((location.hash || '').replace(/^#/, ''));
    const raw = query.get('error_description') || hash.get('error_description') || query.get('error') || hash.get('error') || '';
    if (!raw) return '';
    const text = decodeURIComponent(raw).replace(/\+/g, ' ');
    if (text.length > 160 || /[<>]/.test(text)) return 'Google sign-in did not finish. Try again.';
    return text;
  } catch {
    return '';
  }
}

function stripAuthParams() {
  const url = new URL(location.href);
  let changed = false;
  for (const key of ['code', 'error', 'error_code', 'error_description']) {
    if (!url.searchParams.has(key)) continue;
    url.searchParams.delete(key);
    changed = true;
  }
  if (!changed && !location.hash.includes('error')) return;
  const hash = new URLSearchParams((url.hash || '').replace(/^#/, ''));
  for (const key of ['error', 'error_code', 'error_description', 'access_token']) hash.delete(key);
  url.hash = hash.toString() ? `#${hash}` : '';
  history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
}

function authMessage(json) {
  const raw = json?.msg || json?.error_description || json?.message || json?.error || '';
  const text = String(raw).replace(/\+/g, ' ').trim();
  if (text && text.length < 160 && !/[<>]/.test(text)) return text;
  return 'Google sign-in did not finish. Try again.';
}

function storeSession(session) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    /* the account still works until this page closes */
  }
}

export function readGoogleSession() {
  try {
    const raw = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    if (!raw || raw.provider !== 'google') return null;
    const id = googleAccountId(String(raw.address || '').slice(2));
    if (!id || raw.address !== id || typeof raw.accessToken !== 'string') return null;
    return raw;
  } catch {
    return null;
  }
}

export function clearGoogleSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(VERIFIER_KEY);
  } catch {
    /* already gone */
  }
}

export function accountLabel(session) {
  if (!session) return '';
  if (session.provider === 'google') return session.email || session.name || 'Google';
  return '';
}

async function tokenRequest(cfg, grant, body) {
  const res = await fetch(`${cfg.url}/auth/v1/token?grant_type=${grant}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      apikey: cfg.key,
      authorization: `Bearer ${cfg.key}`,
    },
    body: JSON.stringify(body),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw fail(authMessage(json));
  return json;
}

function sessionFromToken(json, previous = null) {
  const user = json?.user || {};
  const address = googleAccountId(user.id);
  if (!address || typeof json?.access_token !== 'string') throw fail('Google did not return an account.');
  const meta = user.user_metadata || {};
  const email = typeof user.email === 'string' ? user.email : (previous?.email || '');
  const name = typeof meta.full_name === 'string'
    ? meta.full_name
    : (typeof meta.name === 'string' ? meta.name : (previous?.name || ''));
  return {
    provider: 'google',
    address,
    email,
    name,
    accessToken: json.access_token,
    refreshToken: typeof json.refresh_token === 'string' && json.refresh_token
      ? json.refresh_token
      : (previous?.refreshToken || ''),
    expiresAt: Date.now() + (Number(json.expires_in) || 3600) * 1000,
  };
}

/** Sends the browser to Google. Supabase creates the account the first time they approve. */
export async function startGoogleSignIn() {
  const cfg = await loadCloudConfig();
  if (!cfg.url || !cfg.key) throw fail('Google sign-in needs this game connected to its Supabase project.');
  const verifier = b64url(crypto.getRandomValues(new Uint8Array(32)));
  try {
    localStorage.setItem(VERIFIER_KEY, verifier);
  } catch {
    throw fail('This browser is not keeping sign-in data. Allow storage for this site, then try again.');
  }
  const params = new URLSearchParams({
    provider: 'google',
    redirect_to: redirectUrl(),
    code_challenge: await codeChallenge(verifier),
    code_challenge_method: 's256',
  });
  location.assign(`${cfg.url}/auth/v1/authorize?${params}`);
}

/** Turns the code on the return URL into a saved Google account. */
export async function finishGoogleSignIn() {
  const cfg = await loadCloudConfig();
  const code = new URLSearchParams(location.search).get('code') || '';
  let verifier = '';
  try {
    verifier = localStorage.getItem(VERIFIER_KEY) || '';
  } catch {
    verifier = '';
  }
  try {
    if (!cfg.url || !cfg.key) throw fail('Google sign-in needs this game connected to its Supabase project.');
    if (!code || !verifier) throw fail('Google sign-in did not finish. Try again.');
    const json = await tokenRequest(cfg, 'pkce', { auth_code: code, code_verifier: verifier });
    const session = sessionFromToken(json);
    storeSession(session);
    return session;
  } finally {
    try {
      localStorage.removeItem(VERIFIER_KEY);
    } catch {
      /* the code is still removed from the address */
    }
    stripAuthParams();
  }
}

/** A fresh access token for the garden record. Refreshes it when Google's hour is nearly up. */
export async function freshAccessToken(session) {
  if (!session || session.provider !== 'google') return '';
  if (session.accessToken && Number(session.expiresAt) > Date.now() + 60_000) return session.accessToken;
  if (!session.refreshToken) throw fail('Sign in with Google again.');
  const cfg = await loadCloudConfig();
  if (!cfg.url || !cfg.key) throw fail('Sign in with Google again.');
  const json = await tokenRequest(cfg, 'refresh_token', { refresh_token: session.refreshToken });
  const next = sessionFromToken(json, session);
  storeSession(next);
  session.accessToken = next.accessToken;
  session.refreshToken = next.refreshToken;
  session.expiresAt = next.expiresAt;
  if (next.email) session.email = next.email;
  if (next.name) session.name = next.name;
  return next.accessToken;
}
