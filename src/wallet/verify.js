import { bech32 } from 'bech32';
import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha2.js';
import { keccak_256 } from '@noble/hashes/sha3.js';

// Sync verification needs a SHA-512 implementation. The wallet never sees this key.
ed.hashes.sha512 = sha512;

const PREFIX = '\u0017Klever Signed Message:\n';

/** Klever addresses are bech32 encodings of the 32-byte Ed25519 public key. */
export function publicKeyFromAddress(address) {
  if (typeof address !== 'string' || !address.startsWith('klv1')) return null;
  let decoded;
  try {
    decoded = bech32.decode(address, 120);
  } catch {
    return null;
  }
  if (decoded.prefix !== 'klv') return null;
  const bytes = Uint8Array.from(bech32.fromWords(decoded.words));
  return bytes.length === 32 ? bytes : null;
}

export function addressFromPublicKey(publicKey) {
  return bech32.encode('klv', bech32.toWords(publicKey), 120);
}

/**
 * Hash the extension and the Klever Wallet app actually sign.
 * The prefix keeps a login signature from ever being a transaction.
 */
export function kleverMessageHash(message) {
  const text = String(message);
  const prefix = new TextEncoder().encode(PREFIX);
  const length = new TextEncoder().encode(String(text.length));
  const body = new TextEncoder().encode(text);
  const bytes = new Uint8Array(prefix.length + length.length + body.length);
  bytes.set(prefix, 0);
  bytes.set(length, prefix.length);
  bytes.set(body, prefix.length + length.length);
  return keccak_256(bytes);
}

export function signatureBytes(signature) {
  const raw = signature == null ? '' : String(signature).trim().replace(/^0x/i, '');
  if (/^[0-9a-fA-F]+$/.test(raw) && raw.length % 2 === 0) {
    const out = new Uint8Array(raw.length / 2);
    for (let i = 0; i < out.length; i++) out[i] = Number.parseInt(raw.slice(i * 2, i * 2 + 2), 16);
    return out;
  }
  try {
    const bin = atob(raw);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  } catch {
    return new Uint8Array();
  }
}

/** True only when `signature` was produced by the private key behind `address`. */
export function verifyKleverSignature(message, signature, address) {
  const pub = publicKeyFromAddress(address);
  const sig = signatureBytes(signature);
  if (!pub || sig.length < 64) return false;
  const compact = sig.length === 64 ? sig : sig.slice(0, 64);
  const hash = kleverMessageHash(message);
  try {
    if (ed.verify(compact, hash, pub)) return true;
    // Some wallets sign the raw text. Accept that only if it still matches this address.
    return ed.verify(compact, new TextEncoder().encode(String(message)), pub);
  } catch {
    return false;
  }
}
