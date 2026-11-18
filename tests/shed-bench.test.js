import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');

test('trim, hang, and cure each open a shed window', () => {
  const bench = html.slice(html.indexOf('id="bench"'), html.indexOf('id="shop"'));
  assert.match(bench, /id="bench-title"/);
  assert.match(bench, /id="bench-rows"/);
  assert.match(bench, /id="btn-bench-close"/);
  assert.match(html, /CLICK TRIM, THE RACK, OR THE JARS/);
  assert.match(main, /function openBench\(kind\)/);
  assert.match(main, /kind === 'trim' \|\| f\.kind === 'hang' \|\| f\.kind === 'cure'/);
  assert.doesNotMatch(main, /kind === 'hook'/);
  assert.match(main, /className = 'bench-icon'/);
  assert.match(main, /drawIcons\(benchIcons/);
  assert.match(main, /TRIM ALL/);
  assert.match(main, /HANG ALL/);
  assert.match(main, /BURP ALL/);
});
