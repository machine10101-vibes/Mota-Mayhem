import * as ed from "@noble/ed25519";
import { sha512 } from "@noble/hashes/sha2.js";
import { keccak_256 } from "@noble/hashes/sha3.js";
import { bech32 } from "bech32";

// Sync verification needs a SHA-512 implementation. The wallet never sees this key.
ed.hashes.sha512 = sha512;

const PREFIX = "\u0017Klever Signed Message:\n";
const LOGIN_LEAD = "Mota Mayhem wants you to sign in with your Klever wallet.";
const LOGIN_SAFE = "This does not send any coins.";
const MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;
const SKEW_MS = 10 * 60 * 1000;

export function publicKeyFromAddress(address: string): Uint8Array | null {
  if (!address.startsWith("klv1")) return null;
  try {
    const decoded = bech32.decode(address, 120);
    if (decoded.prefix !== "klv") return null;
    const bytes = Uint8Array.from(bech32.fromWords(decoded.words));
    return bytes.length === 32 ? bytes : null;
  } catch {
    return null;
  }
}

/** Hash the extension and the Klever Wallet app actually sign. */
export function kleverMessageHash(message: string): Uint8Array {
  const prefix = new TextEncoder().encode(PREFIX);
  const length = new TextEncoder().encode(String(message.length));
  const body = new TextEncoder().encode(message);
  const bytes = new Uint8Array(prefix.length + length.length + body.length);
  bytes.set(prefix, 0);
  bytes.set(length, prefix.length);
  bytes.set(body, prefix.length + length.length);
  return keccak_256(bytes);
}

export function signatureBytes(signature: string): Uint8Array {
  const raw = signature.trim().replace(/^0x/i, "");
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
export function verifyKleverSignature(message: string, signature: string, address: string): boolean {
  const pub = publicKeyFromAddress(address);
  const sig = signatureBytes(signature);
  if (!pub || sig.length < 64) return false;
  const compact = sig.length === 64 ? sig : sig.slice(0, 64);
  const hash = kleverMessageHash(message);
  try {
    if (ed.verify(compact, hash, pub)) return true;
    return ed.verify(compact, new TextEncoder().encode(message), pub);
  } catch {
    return false;
  }
}

/**
 * A login signature is only good for this game, this address, and a week.
 * The lines match the message the title screen asks the wallet to sign.
 */
export function loginMessageOk(message: string, address: string, now = Date.now()): boolean {
  if (message.length === 0 || message.length > 2000) return false;
  const lines = message.split("\n");
  if (lines.length !== 5) return false;
  if (lines[0] !== LOGIN_LEAD || lines[1] !== LOGIN_SAFE) return false;
  if (lines[2] !== `Address: ${address}`) return false;
  if (!/^Nonce: [0-9a-f]{32}$/.test(lines[3])) return false;
  const issued = /^Issued: (\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)$/.exec(lines[4]);
  if (!issued) return false;
  const at = Date.parse(issued[1]);
  if (!Number.isFinite(at)) return false;
  if (at > now + SKEW_MS) return false;
  if (now - at > MAX_AGE_MS) return false;
  return true;
}
