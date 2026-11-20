import assert from 'node:assert/strict';
import { test } from 'node:test';
import { adoptAddress, clearSave, loadSave, saveKey, unbindAddress, writeSave } from '../src/save.js';

function withStorage(storage, fn) {
  const previous = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: storage });
  try { fn(); } finally {
    unbindAddress();
    if (previous) Object.defineProperty(globalThis, 'localStorage', previous);
    else delete globalThis.localStorage;
  }
}

test('save helpers fail safely when browser storage is unavailable', () => {
  withStorage({
    getItem() { throw new Error('storage blocked'); },
    setItem() { throw new Error('storage blocked'); },
    removeItem() { throw new Error('storage blocked'); },
  }, () => {
    assert.equal(loadSave(), null);
    assert.equal(writeSave({ mota: 10 }), null);
    assert.doesNotThrow(() => clearSave());
    assert.equal(adoptAddress('account-test').save, null);
  });
});

test('anonymous gardens can be adopted and saved under an account key', () => {
  const values = new Map();
  withStorage({
    getItem(key) { return values.get(key) ?? null; },
    setItem(key, value) { values.set(key, String(value)); },
    removeItem(key) { values.delete(key); },
  }, () => {
    const initial = writeSave({ mota: 42 });
    assert.equal(initial.mota, 42);
    const adopted = adoptAddress('account-test');
    assert.equal(adopted.note, 'claimed');
    assert.equal(adopted.save.mota, 42);
    assert.equal(values.has('mm-save-v1'), false);
    assert.equal(loadSave().mota, 42);
    assert.equal(saveKey(), 'mm-save-v1:account-test');
  });
});
