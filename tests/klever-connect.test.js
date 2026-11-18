import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import * as ed from '@noble/ed25519';
import { sha512 } from '@noble/hashes/sha2.js';
import { signatureText } from '../src/wallet/klever.js';
import { addressFromPublicKey, kleverMessageHash, signatureBytes, verifyKleverSignature } from '../src/wallet/verify.js';

ed.hashes.sha512 = sha512;

const klever = readFileSync(new URL('../src/wallet/klever.js', import.meta.url), 'utf8');

test('mobile signing prefers the SDK method and prevents overlapping prompts', () => {
  assert.match(klever, /if \(typeof kw\?\.signMessage === 'function'\) return kw\.signMessage\(message\)/);
  assert.match(klever, /if \(signingInFlight\)[\s\S]*A Klever signature request is already in progress/);
  const request = klever.slice(klever.indexOf('async function requestSignature'), klever.indexOf('export function waitForProvider'));
  assert.ok(request.indexOf('kw.signMessage(message)') < request.indexOf('legacySignMessage(message)'));
  assert.ok(request.indexOf('legacySignMessage(message)') < request.indexOf('SIGN_IN_MESSAGE'));
});

test('Klever Connect Signature objects expose bytes and hex fields', () => {
  const bytes = new Uint8Array(64).fill(0xab);
  const expected = 'ab'.repeat(64);
  assert.equal(signatureText({ bytes }), expected);
  assert.equal(signatureText({ hex: expected }), expected);
});

test('Klever approval event extracts the signature, not the echoed message', () => {
  const signature = 'ab'.repeat(64);
  const event = {
    data: {
      status: 'ACCEPTED',
      data: {
        message: 'Mota Mayhem wants you to connect your Klever wallet.',
        signature,
      },
    },
  };
  assert.equal(signatureText(event), signature);
  assert.equal(signatureText({ data: { status: 'ACCEPTED', data: { message: 'echoed message only' } } }), '');
  assert.equal(signatureText(signature), signature);
});

test('Base64-encoded hex signatures verify for the Klever address', () => {
  const secret = new Uint8Array(32).fill(7);
  const address = addressFromPublicKey(ed.getPublicKey(secret));
  const message = [
    'Mota Mayhem wants you to connect your Klever wallet.',
    'This does not send any coins.',
    `Address: ${address}`,
    'Nonce: 00112233445566778899aabbccddeeff',
    'Issued: 2026-11-18T08:00:00.000Z',
  ].join('\n');
  const signature = ed.sign(kleverMessageHash(message), secret);
  const hex = [...signature].map((b) => b.toString(16).padStart(2, '0')).join('');
  const hexBase64 = btoa(hex);
  const rawBase64 = btoa(String.fromCharCode(...signature));
  assert.equal(signatureBytes(hexBase64).length, 64);
  assert.equal(signatureBytes(rawBase64).length, 64);
  assert.equal(verifyKleverSignature(message, hex, address), true);
  assert.equal(verifyKleverSignature(message, hexBase64, address), true);
  assert.equal(verifyKleverSignature(message, rawBase64, address), true);
});
