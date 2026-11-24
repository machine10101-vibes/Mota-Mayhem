import assert from 'node:assert/strict';
import { test } from 'node:test';
import { weatherEffect } from '../src/weather-fx.js';

test('visual weather mirrors forecast precipitation without changing gameplay data', () => {
  assert.deepEqual(weatherEffect({ id: 'clear' }), {
    type: 'none', interval: 1, burst: 0, color: 0xffffff, wind: 0,
  });
  assert.equal(weatherEffect({ id: 'showers', rain: true }).type, 'rain');
  assert.equal(weatherEffect({ id: 'storm', rain: true }).burst, 4);
  assert.ok(weatherEffect({ id: 'storm', rain: true }).interval < weatherEffect({ id: 'showers', rain: true }).interval);
  assert.equal(weatherEffect({ id: 'snow' }).type, 'snow');
  assert.equal(weatherEffect({ id: 'frost' }).type, 'none');
  assert.equal(weatherEffect(null).type, 'none');
});

test('visual weather profiles are bounded and contain render-safe values', () => {
  for (const weather of [{ id: 'snow' }, { id: 'storm', rain: true }, { id: 'showers', rain: true }, {}]) {
    const fx = weatherEffect(weather);
    assert.ok(fx.interval > 0 && fx.interval <= 1);
    assert.ok(fx.burst >= 0 && fx.burst <= 4);
    assert.ok(Number.isFinite(fx.color));
    assert.ok(Number.isFinite(fx.wind));
  }
});
