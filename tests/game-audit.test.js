import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const world = readFileSync(new URL('../src/world.js', import.meta.url), 'utf8');
const fx = readFileSync(new URL('../src/fx.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('Moon Garden is an open courtyard with solid raised features', () => {
  assert.match(world, /place\(group, buildMoonGarden\(\), 1 \/ 16, -16\.5, 0, 6\.5\)/);
  assert.doesNotMatch(world, /colliders\.push\(\{ x0: -19\.2, x1: -13\.8, z0: 4\.4, z1: 8\.9 \}\)/);
  assert.match(world, /x0: -17\.4, x1: -15\.6, z0: 5\.6, z1: 7\.4/);
  assert.match(main, /moonGarden: !!world\.moonGarden\.owned/);
  assert.match(main, /world\.moonGarden\.owned = !!save\.moonGarden/);
  assert.doesNotMatch(main, /world\.moonGarden\.block|moonGarden\.gate/);
});

test('keyboard users can activate pointer-driven interface controls', () => {
  for (const id of ['btn-settings', 'btn-breeding-close', 'btn-breed-cross', 'btn-shop-close', 'btn-character', 'btn-you', 'btn-inv', 'strain-now', 'btn-help-hud', 'btn-dress-done']) {
    assert.match(main, new RegExp('\\$\\(' + id + '\\).*addEventListener\\(\\'click\\''));
  }
  assert.match(main, /e\.target\?\.closest\?\.\('button, a, input, textarea, select, \[role="button"\]/);
  assert.match(main, /if \(e\.detail === 0\) fn\(\)/);
  assert.match(main, /let keyboardHeld = false/);
  assert.match(html, /id="prompt" role="button" tabindex="0"/);
  assert.match(main, /el\\.addEventListener\\('keydown', \\(e\\) => \\{\\s*if \\(e\\.code !== 'Space' && e\\.code !== 'Enter'\\)/);
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
