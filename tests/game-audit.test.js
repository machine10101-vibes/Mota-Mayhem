import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const world = readFileSync(new URL('../src/world.js', import.meta.url), 'utf8');
const fx = readFileSync(new URL('../src/fx.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('Moon Garden has a gated entrance and walkable courtyard after purchase', () => {
  assert.match(world, /const moonGateBlock = \{ x0: -13\.9, x1: -13\.4, z0: 4\.55, z1: 8\.45 \}/);
  assert.match(world, /gate: moonGate, block: moonGateBlock/);
  assert.doesNotMatch(world, /colliders\.push\(\{ x0: -19\.2, x1: -13\.8, z0: 4\.4, z1: 8\.9 \}\)/);
  assert.match(main, /if \(!world\.moonGarden\.owned\) blocks\.push\(world\.moonGarden\.block\)/);
  assert.match(main, /garden\.gate\.visible = false/);
  assert.match(main, /world\.moonGarden\.gate\.visible = true/);
  assert.match(main, /world\.moonGarden\.gate\.visible = !world\.moonGarden\.owned/);
});

test('keyboard users can activate pointer-driven interface controls', () => {
  for (const id of ['btn-settings', 'btn-breeding-close', 'btn-breed-cross', 'btn-shop-close', 'btn-character', 'btn-you', 'btn-inv', 'strain-now', 'btn-help-hud', 'btn-dress-done']) {
    assert.match(main, new RegExp('\\$\\(' + id + '\\).*addEventListener\\(\\'click\\''));
  }
  assert.match(main, /e\.target\?\.closest\?\.\('button, a, input, textarea, select, \[role="button"\]/);
  assert.match(main, /if \(e\.detail === 0\) fn\(\)/);
  assert.match(main, /let keyboardHeld = false/);
  assert.match(html, /id="prompt" role="button" tabindex="0"/);
});

test('pixel preference access tolerates blocked browser storage', () => {
  assert.match(main, /function readPreference\(key\)\s*\{\s*try \{ return localStorage\.getItem\(key\); \} catch/);
  assert.match(main, /Number\(readPreference\('mm-pixel'\)\)/);
  assert.doesNotMatch(main, /Number\(localStorage\.getItem\('mm-pixel'\)\)/);
});

test('particle fade colors are allocated once at emission, not every frame', () => {
  assert.match(fx, /color2: o\.color2 === undefined \? null : new THREE\.Color\(o\.color2\)/);
  assert.match(fx, /if \(p\.color2\) this\.col\.lerp\(p\.color2, t\)/);
  assert.doesNotMatch(fx, /new THREE\.Color\(p\.color2\)/);
});
