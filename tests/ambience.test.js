import assert from 'node:assert/strict';
import { test } from 'node:test';
import { nightIntensity } from '../src/ambience.js';

test('night ambience follows the estate sun arc with smooth day and night endpoints', () => {
  assert.equal(nightIntensity(0.25), 0);
  assert.equal(nightIntensity(0.75), 1);
  assert.ok(nightIntensity(0.5) > 0 && nightIntensity(0.5) < 1);
  assert.equal(nightIntensity(1.25), nightIntensity(0.25));
});

test('night ambience safely normalizes unusual day fractions', () => {
  assert.equal(nightIntensity(-0.25), nightIntensity(0.75));
  assert.equal(nightIntensity(Number.NaN), nightIntensity(0));
  assert.ok(nightIntensity(0.6) >= 0 && nightIntensity(0.6) <= 1);
});
