import assert from 'node:assert/strict';
import { test } from 'node:test';
import { STRAINS, STRAIN_IDS, clearHybridStrains, createHybridStrain, hybridDefinitions, registerHybridStrain, seedTotal, strainOf, strainPace, starterSeeds } from '../src/strains.js';

test('base strain catalogue and growth pacing stay consistent', () => {
  const seeds = starterSeeds();
  assert.equal(STRAIN_IDS.length, 7);
  assert.equal(seedTotal(seeds), 40);
  assert.equal(strainOf('unknown').id, 'bd');
  assert.equal(strainOf(1).id, STRAIN_IDS[1]);
  assert.equal(strainPace('gc', 2), 1.15);
  assert.equal(strainPace('bb', 3), 7.5 / 9);
  assert.equal(strainPace('bd', 1), 1);
});

test('hybrid genetics can be created, serialized, and restored without duplicate ids', () => {
  clearHybridStrains();
  const hybrid = createHybridStrain('bd', 'gdp');
  assert.ok(hybrid);
  assert.equal(hybrid.id, 'hyb1');
  assert.equal(hybrid.kind, 'HYBRID');
  assert.equal(hybrid.parents[0], 'bd');
  assert.equal(hybrid.parents[1], 'gdp');
  assert.ok(STRAIN_IDS.includes(hybrid.id));
  assert.ok(seedTotal({ ...starterSeeds(), [hybrid.id]: 3 }) >= 3);

  const saved = hybridDefinitions();
  assert.equal(saved.length, 1);
  clearHybridStrains();
  assert.equal(STRAIN_IDS.includes('hyb1'), false);
  const restored = registerHybridStrain(saved[0]);
  assert.equal(restored.id, 'hyb1');
  assert.equal(strainOf('hyb1').name, hybrid.name);
  const next = createHybridStrain('bd', 'gc');
  assert.equal(next.id, 'hyb2');
  clearHybridStrains();
  assert.equal(hybridDefinitions().length, 0);
  assert.equal(STRAIN_IDS.length, 7);
});

test('hybrid registration rejects invalid ids and bounds inherited traits', () => {
  clearHybridStrains();
  assert.equal(registerHybridStrain({ id: 'not-a-hybrid' }), null);
  const hybrid = registerHybridStrain({ id: 'hyb9', parents: ['bd', 'gdp'], flower: 99, veg: -4, stature: 1.1, frost: 1.2, bud: [1, 2, 3] });
  assert.equal(hybrid.flower, 1.8);
  assert.equal(hybrid.veg, 0.65);
  assert.deepEqual(hybrid.bud, [1, 2, 3]);
  clearHybridStrains();
});
