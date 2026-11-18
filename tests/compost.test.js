import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { COMPOST_CAP, SCRAP_CAP, blendCook, cookProgress, dumpScraps, gainScrap, turnCompost } from '../src/compost.js';

test('trimming keeps a capped bag of leaf scraps', () => {
  assert.equal(gainScrap(0), 1);
  assert.equal(gainScrap(SCRAP_CAP), SCRAP_CAP);
  assert.equal(gainScrap(-3), 1);
});

test('the pile takes scraps until it is full', () => {
  const dumped = dumpScraps(5, 0);
  assert.deepEqual(dumped, { scraps: 0, fill: 5, n: 5 });
  const topped = dumpScraps(4, COMPOST_CAP - 1);
  assert.equal(topped.fill, COMPOST_CAP);
  assert.equal(topped.n, 1);
  assert.equal(topped.scraps, 3);
  assert.equal(dumpScraps(3, COMPOST_CAP).n, 0);
});

test('fresh scraps slow a pile that is already cooking', () => {
  assert.equal(blendCook(0.5, 4, 4), 0.25);
  assert.equal(blendCook(1, 0, 3), 0);
  assert.equal(blendCook(0.8, 2, 0), 0.8);
});

test('a finished pile becomes that many nutrients', () => {
  assert.deepEqual(turnCompost(2, 3, false), { nutrients: 2, fill: 3, n: 0 });
  assert.deepEqual(turnCompost(2, 3, true), { nutrients: 5, fill: 0, n: 3 });
  assert.equal(turnCompost(0, 0, true).n, 0);
});

test('cook time advances and stops at done', () => {
  assert.equal(cookProgress(0, 5, 10), 0.5);
  assert.equal(cookProgress(0.8, 5, 10), 1);
  assert.equal(cookProgress(0.2, 0, 10), 0.2);
});

test('the yard bin is a station and scraps survive a save', () => {
  const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.match(main, /kind === 'compost'/);
  assert.match(main, /DUMP SCRAPS/);
  assert.match(main, /TURN COMPOST/);
  assert.match(main, /scraps: state\.scraps/);
  assert.match(html, /COMPOST/);
});
