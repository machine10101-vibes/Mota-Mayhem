import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');

test('Klever connect lives in the settings menu', () => {
  const settings = html.slice(html.indexOf('id="settings"'), html.indexOf('id="shop"'));
  assert.match(settings, /id="btn-set-wallet"/);
  assert.match(settings, /KLEVER WALLET/);
  assert.equal(html.includes('id="btn-wallet"'), false);
  const onWallet = main.slice(main.indexOf('async function onWallet'), main.indexOf('async function applyWallet'));
  assert.match(onWallet, /openSettings\(\)/);
  assert.doesNotMatch(onWallet, /state\.mode === 'play'/);
});
