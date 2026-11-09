import { assert, assertEquals } from "jsr:@std/assert@1";
import * as ed from "@noble/ed25519";
import { sha512 } from "@noble/hashes/sha2.js";
import { bech32 } from "bech32";
import { kleverMessageHash, loginMessageOk, publicKeyFromAddress, verifyKleverSignature } from "./verify.ts";

ed.hashes.sha512 = sha512;

function addressFromPublicKey(publicKey: Uint8Array): string {
  return bech32.encode("klv", bech32.toWords(publicKey), 120);
}

function loginMessage(address: string, issued: string): string {
  return [
    "Mota Mayhem wants you to sign in with your Klever wallet.",
    "This does not send any coins.",
    `Address: ${address}`,
    "Nonce: 00112233445566778899aabbccddeeff",
    `Issued: ${issued}`,
  ].join("\n");
}

Deno.test("a Klever address is 62 characters and verifies its own login", () => {
  const secret = new Uint8Array(32).fill(7);
  const pub = ed.getPublicKey(secret);
  const address = addressFromPublicKey(pub);
  assertEquals(address.length, 62);
  assert(publicKeyFromAddress(address) !== null);
  const message = loginMessage(address, new Date().toISOString());
  const signature = ed.sign(kleverMessageHash(message), secret);
  const hex = [...signature].map((b) => b.toString(16).padStart(2, "0")).join("");
  assert(verifyKleverSignature(message, hex, address));
  assert(loginMessageOk(message, address));
  assert(!verifyKleverSignature(message, hex, addressFromPublicKey(ed.getPublicKey(new Uint8Array(32).fill(9)))));
  assert(!loginMessageOk(message.replace("Nonce: 00112233445566778899aabbccddeeff", "Nonce: short"), address));
  const stale = loginMessage(address, new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString());
  assert(!loginMessageOk(stale, address));
});

Deno.test("the known mainnet sample decodes to 32 bytes", () => {
  const sample = "klv1fpwjz234gy8aaae3gx0e8q9f52vymzzn3z5q0s5h60pvktzx0n0qwvtux5";
  assertEquals(sample.length, 62);
  assertEquals(publicKeyFromAddress(sample)?.length, 32);
});
