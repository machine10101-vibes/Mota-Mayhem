import assert from 'node:assert/strict';
import { test } from 'node:test';

const values = new Map();
globalThis.localStorage = {
  getItem: (key) => values.has(key) ? values.get(key) : null,
  setItem: (key, value) => values.set(key, String(value)),
};

const { soundEnabled, setSoundEnabled, playSfx } = await import('../src/audio.js');

test('sound preference defaults on and persists mute/unmute', () => {
  assert.equal(soundEnabled(), true);
  setSoundEnabled(false);
  assert.equal(soundEnabled(), false);
  assert.equal(values.get('mm-sound-v1'), 'off');
  setSoundEnabled(true);
  assert.equal(soundEnabled(), true);
});

test('unknown effects and muted playback are safely rejected', () => {
  assert.equal(playSfx('unknown'), false);
  setSoundEnabled(false);
  assert.equal(playSfx('harvest'), false);
});
