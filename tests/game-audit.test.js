import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const world = readFileSync(new URL('../src/world.js', import.meta.url), 'utf8');
const fx = readFileSync(new URL('../src/fx.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('Moon Garden is an open courtyard with solid raised features and night lighting', () => {
  assert.ok(world.includes('place(group, buildMoonGarden(), 1 / 16, -16.5, 0, 6.5)'));
  assert.ok(!world.includes('colliders.push({ x0: -19.2, x1: -13.8, z0: 4.4, z1: 8.9 })'));
  assert.ok(world.includes('{ x0: -17.4, x1: -15.6, z0: 5.6, z1: 7.4 }'));
  assert.ok(world.includes('new THREE.PointLight(0x8fd7df, 0, 8, 2)'));
  assert.ok(world.includes('glow: moonGlow'));
  assert.ok(main.includes('moonGarden: !!world.moonGarden.owned'));
  assert.ok(main.includes('world.moonGarden.owned = !!save.moonGarden'));
  assert.ok(main.includes('MOON GARDEN BONUS READY WHEN GLASSHOUSE IS UNLOCKED'));
  assert.ok(main.includes('MOON GARDEN OWNED · BONUS WHEN GLASSHOUSE UNLOCKED'));
  assert.ok(main.includes('if (world.moonGarden?.glow) world.moonGarden.glow.intensity = glow * 1.45;'));
  assert.ok(!main.includes('world.moonGarden.block') && !main.includes('moonGarden.gate'));
});

test('keyboard users can activate pointer-driven interface controls', () => {
  for (const id of ['btn-settings', 'btn-breeding-close', 'btn-breed-cross', 'btn-shop-close', 'btn-character', 'btn-you', 'btn-inv', 'strain-now', 'btn-help-hud', 'btn-dress-done']) {
    assert.ok(main.includes("$('" + id + "')") && main.includes("$('" + id + "')?.addEventListener('click'") || main.includes("$('" + id + "').addEventListener('click'"), id);
  }
  assert.ok(main.includes("e.target?.closest?.('button, a, input, textarea, select, [role=\"button\""));
  assert.ok(main.includes("if (e.detail === 0) fn()"));
  assert.ok(main.includes('let keyboardHeld = false'));
  assert.ok(html.includes('id="prompt" role="button" tabindex="0"'));
  assert.ok(main.includes("el.addEventListener('keydown'"));
});

test('pixel preference access tolerates blocked browser storage', () => {
  assert.ok(main.includes('function readPreference(key)'));
  assert.ok(main.includes('Number(readPreference(\'mm-pixel\'))'));
  assert.ok(!main.includes("Number(localStorage.getItem('mm-pixel'))"));
});

test('particle fade colors are allocated once at emission, not every frame', () => {
  assert.ok(fx.includes('color2: o.color2 === undefined ? null : new THREE.Color(o.color2)'));
  assert.ok(fx.includes('if (p.color2) this.col.lerp(p.color2, t)'));
  assert.ok(!fx.includes('new THREE.Color(p.color2)'));
});


test('camera zoom supports a much wider view on mouse wheel and touch pinch', async () => {
  assert.match(main, /far: \{ value: 280 \}/);
  assert.match(main, /new THREE\.Fog\(SKY, 96, 190\)/);
  assert.match(main, /new THREE\.PerspectiveCamera\(33, 16 \/ 9, 1, 280\)/);
  assert.match(main, /Math\.sign\(e\.deltaY\) \* 2\.2, 12, 72/);
  assert.match(main, /\(pinch0 - d\) \* 0\.055, 12, 72/);
});


test('inventory can filter seeds, harvested goods, and supplies accessibly', () => {
  for (const filter of ['all', 'seeds', 'harvest', 'supplies']) {
    assert.ok(html.includes(`data-bag-filter="${filter}"`));
  }
  assert.ok(html.includes('aria-label="Filter inventory"'));
  assert.ok(main.includes("let bagFilter = 'all'"));
  assert.ok(main.includes("if (bagFilter !== 'all' && item.category !== bagFilter) return;"));
  assert.ok(main.includes("item.category === bagFilter") === false);
  assert.ok(main.includes("filter.setAttribute('aria-pressed', active ? 'true' : 'false')"));
  assert.ok(main.includes("addBagSlot(grid, { category: 'harvest'"));
  assert.ok(main.includes("addBagSlot(grid, { category: 'supplies'"));
});
