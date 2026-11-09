/**
 * Email accounts are created in Supabase Auth.
 * The garden is stored under g:<user id>, the same way a Klever garden uses its address.
 */

import { loadCloudConfig } from './cloud.js';

const SESSION_KEY = 'mm-account-session';
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

export function accountId(id) {
  const clean = String(id || '').trim().toLowerCase();
  return UUID_RE.test(clean) ? `g:${clean}` : '';
}

function fail(message) {
  const err = new Error(message);
  err.code = 'account';
  return err;
}

export function accountProblem(email, password) {
  const mail = String(email || '').trim();
  const pass = String(password || '');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail) || mail.length > 120) return 'Enter the email for this account.';
  if (pass.length < 6) return 'Use at least 6 characters for the password.';
  if (pass.length > 72) return 'That password is too long.';
  return '';
}

function authMessage(json) {
  const raw = json?.msg || json?.error_description || json?.message || json?.error || '';
  const text = String(raw).replace(/\+/g, ' ').trim();
  if (/already registered|already exists/i.test(text)) return 'That email already has an account. Sign in.';
  if (/invalid login/i.test(text)) return 'That email and password do not match.';
  if (/not confirmed/i.test(text)) return 'Confirm that email, then sign in.';
  if (text && text.length < 160 && !/[<>]/.test(text)) return text;
  return 'The account could not be opened.';
}

async function requireConfig() {
  const cfg = await loadCloudConfig();
  if (!cfg.url || !cfg.key) throw fail('Email sign-in needs this game connected to its Supabase project.');
  return cfg;
}

function storeSession(session) {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    /* the account still works until this page closes */
  }
}

export function readAccountSession() {
  try {
    const raw = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    if (!raw || raw.provider !== 'email') return null;
    const id = accountId(String(raw.address || '').slice(2));
    if (!id || raw.address !== id || typeof raw.accessToken !== 'string') return null;
    return raw;
  } catch {
    return null;
  }
}

export function clearAccountSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch {
    /* already gone */
  }
}

export function accountLabel(session) {
  if (!session || session.provider !== 'email') return '';
  return session.email || 'Email account';
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
  const address = accountId(user.id);
  if (!address || typeof json?.access_token !== 'string') throw fail('The account could not be opened.');
  const email = typeof user.email === 'string' ? user.email : (previous?.email || '');
  return {
    provider: 'email',
    address,
    email,
    accessToken: json.access_token,
    refreshToken: typeof json.refresh_token === 'string' && json.refresh_token
      ? json.refresh_token
      : (previous?.refreshToken || ''),
    expiresAt: Date.now() + (Number(json.expires_in) || 3600) * 1000,
  };
}

/** Creates the account and signs in. Null means the project asked them to confirm the email first. */
export async function createAccount(email, password) {
  const cfg = await requireConfig();
  const res = await fetch(`${cfg.url}/auth/v1/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      apikey: cfg.key,
      authorization: `Bearer ${cfg.key}`,
    },
    body: JSON.stringify({ email: email.trim(), password }),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) throw fail(authMessage(json));
  if (typeof json.access_token !== 'string') return null;
  const session = sessionFromToken(json);
  storeSession(session);
  return session;
}

export async function signInAccount(email, password) {
  const cfg = await requireConfig();
  const json = await tokenRequest(cfg, 'password', { email: email.trim(), password });
  const session = sessionFromToken(json);
  storeSession(session);
  return session;
}

/** A fresh access token for the garden record. Refreshes it when the hour is nearly up. */
export async function freshAccessToken(session) {
  if (!session || session.provider !== 'email') return '';
  if (session.accessToken && Number(session.expiresAt) > Date.now() + 60_000) return session.accessToken;
  if (!session.refreshToken) throw fail('Sign in again.');
  const cfg = await requireConfig();
  const json = await tokenRequest(cfg, 'refresh_token', { refresh_token: session.refreshToken });
  const next = sessionFromToken(json, session);
  storeSession(next);
  session.accessToken = next.accessToken;
  session.refreshToken = next.refreshToken;
  session.expiresAt = next.expiresAt;
  if (next.email) session.email = next.email;
  return next.accessToken;
}
