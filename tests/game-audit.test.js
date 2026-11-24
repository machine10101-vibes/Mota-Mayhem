import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const world = readFileSync(new URL('../src/world.js', import.meta.url), 'utf8');
const fx = readFileSync(new URL('../src/fx.js', import.meta.url), 'utf8');
const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const css = readFileSync(new URL('../src/style.css', import.meta.url), 'utf8');

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


test('thirsty ripening plants can be watered without losing their harvest window', () => {
  const waterAction = main.indexOf("d.state === 'growing' || d.state === 'ripening'");
  const harvestAction = main.indexOf("} else if (d.state === 'ready' || d.state === 'ripening')");
  assert.ok(waterAction >= 0 && harvestAction > waterAction);
  assert.ok(main.includes("toast(d.state === 'ripening' ? 'FLOWER WATERED — RIPENING CONTINUES' : 'PLANT WATERED', 'good')"));
  const promptWater = main.indexOf("d.state === 'ripening' && d.water <= 0.7");
  const promptHarvest = main.indexOf("} else if (d.state === 'ripening')", promptWater);
  assert.ok(promptWater >= 0 && promptHarvest > promptWater);
});


test('responsive input layout switches cleanly between touch and desktop', () => {
  assert.ok(main.includes('const syncInputLayout = () => setTouchUI(shouldTouch())'));
  assert.ok(main.includes("matchMedia('(max-width: 820px)').addEventListener('change', syncInputLayout)"));
  assert.ok(main.includes("matchMedia('(pointer: coarse)').addEventListener('change', syncInputLayout)"));
  assert.ok(!main.includes('shouldTouch() || touchUI'));
  assert.ok(css.includes('#title {\n  overflow-y:auto;'));
  assert.ok(css.includes('@media (orientation: landscape) and (max-height: 500px)'));
  assert.ok(css.includes('env(safe-area-inset-top)'));
});


test('mobile backgrounding flushes local and cloud saves before suspension', () => {
  const handler = main.indexOf("document.addEventListener('visibilitychange'");
  const hidden = main.indexOf("document.visibilityState !== 'hidden'", handler);
  const localFlush = main.indexOf('flushSave();', hidden);
  const cloudFlush = main.indexOf('flushCloud();', localFlush);
  assert.ok(handler >= 0 && hidden > handler);
  assert.ok(localFlush > hidden && cloudFlush > localFlush);
});

test('sales stand preserves partial stock reserved for an unfinished buyer order', async () => {
  const { saleableJars } = await import('../src/economy.js');
  const jars = { A: 4, AA: 2, AAA: 5, AAAA: 1 };
  assert.deepEqual(saleableJars(jars, { grade: 'AAA', count: 2, claimed: false }), {
    A: 4, AA: 2, AAA: 3, AAAA: 1,
  });
  assert.deepEqual(saleableJars(jars, { grade: 'AAA', count: 6, claimed: false }), {
    A: 4, AA: 2, AAA: 0, AAAA: 1,
  });
  assert.deepEqual(saleableJars(jars, { grade: 'AAA', count: 2, claimed: true }), jars);
  assert.deepEqual(saleableJars(jars, null), jars);
  assert.deepEqual(saleableJars({ AAA: -3, A: 2.8 }, { grade: 'AAA', count: 2, claimed: false }), {
    A: 2, AA: 0, AAA: 0, AAAA: 0,
  });
});

test('perfect cure burps reward timing while late-window burps preserve grade', async () => {
  const { burpJar } = await import('../src/economy.js');
  const perfect = { grade: 'AAA', cure: 0.43, needsBurp: true, burped: false, missed: false };
  assert.deepEqual(burpJar(perfect), { perfect: true, upgraded: true });
  assert.equal(perfect.grade, 'AAAA');
  assert.equal(perfect.burped, true);
  assert.equal(perfect.needsBurp, false);

  const steady = { grade: 'AA', cure: 0.55, needsBurp: true, burped: false, missed: false };
  assert.deepEqual(burpJar(steady), { perfect: false, upgraded: false });
  assert.equal(steady.grade, 'AA');

  const capped = { grade: 'AAAA', cure: 0.42, needsBurp: true, burped: false, missed: false };
  assert.deepEqual(burpJar(capped), { perfect: true, upgraded: false });
  assert.equal(capped.grade, 'AAAA');

  for (const blocked of [
    null,
    { grade: 'AAA', cure: 0.5, needsBurp: false },
    { grade: 'AAA', cure: 0.5, needsBurp: true, burped: true },
    { grade: 'AAA', cure: 0.5, needsBurp: true, missed: true },
    { grade: 'AAA', cure: 0.62, needsBurp: true },
    { grade: 'AAA', cure: 0.2, needsBurp: true },
    { grade: 'AAA', cure: Number.NaN, needsBurp: true },
    { grade: 'AAA', cure: 0.5, needsBurp: true, sealed: true },
  ]) assert.equal(burpJar(blocked), null);
});


test('Enterprise signup and promotion surfaces are tied to the upstairs computer and a reviewed public catalog', async () => {
  const { safeHttpsUrl, slugifyBrand } = await import('../src/enterprise.js');
  assert.equal(safeHttpsUrl('https://example.com/brand'), 'https://example.com/brand');
  assert.equal(safeHttpsUrl('http://example.com'), null);
  assert.equal(safeHttpsUrl('javascript:alert(1)'), null);
  assert.equal(safeHttpsUrl('', true), null);
  assert.equal(slugifyBrand('  Green Valley Genetics! '), 'green-valley-genetics');
  assert.ok(html.includes('id="btn-enterprise-open"'));
  assert.ok(html.includes('id="enterprise-application-form"'));
  assert.ok(html.includes('id="enterprise-strain-form"'));
  assert.ok(html.includes('id="enterprise-campaign-form"'));
  assert.ok(html.includes('id="enterprise-ad"'));
  assert.ok(main.includes("if (f.kind === 'computer') return openShop();"));
  assert.ok(main.includes('loadSponsoredCampaign'));
  assert.ok(main.includes('setAdultAttested(enabled)'));
  assert.ok(main.includes('bindEnterprise();'));
  assert.ok(css.includes('.enterprise-ad-label'));
  const migration = readFileSync(new URL('../supabase/migrations/20261124050000_enterprise_brand_system.sql', import.meta.url), 'utf8');
  assert.match(migration, /enable row level security/);
  assert.match(migration, /status = 'approved'/);
  assert.match(migration, /with check \([\s\S]*status = 'pending'/);
});


test('four-season calendar creates distinct climates, weekly events and seasonal markets', async () => {
  const { seasonForDay, weatherForDay, seasonalGrowthRate, seasonalMarketMultiplier } = await import('../src/seasons.js');
  assert.deepEqual(
    [1, 29, 57, 85, 113].map((day) => {
      const season = seasonForDay(day);
      return [season.name, season.year];
    }),
    [['SPRING', 1], ['SUMMER', 1], ['AUTUMN', 1], ['WINTER', 1], ['SPRING', 2]],
  );
  assert.deepEqual(
    [1, 29, 57, 85].map((day) => seasonForDay(day).dayInSeason),
    [1, 1, 1, 1],
  );
  assert.equal(seasonForDay(28).dayInSeason, 28);
  assert.equal(seasonForDay(29).dayInSeason, 1);
  assert.equal(seasonForDay(8).event.name, 'POLLINATOR BLOOM');
  assert.equal(seasonForDay(15).event.name, 'RAIN GARDEN WEEK');
  assert.equal(seasonForDay(22).event.name, 'GARDEN SHOWCASE');
  assert.equal(weatherForDay(3).rain, true);
  assert.equal(weatherForDay(31).id, 'heatwave');
  assert.equal(weatherForDay(59).id, 'showers');
  assert.equal(weatherForDay(86).id, 'frost');
  const { weatherForecast } = await import('../src/seasons.js');
  assert.deepEqual(weatherForecast(28, 3).map((entry) => [entry.day, entry.season]), [
    [28, 'SPRING'], [29, 'SUMMER'], [30, 'SUMMER'],
  ]);
  assert.equal(weatherForecast(1, 0).length, 1);
  assert.equal(weatherForecast(Number.NaN, 2)[0].day, 1);
  assert.ok(weatherForecast(84, 7).every((entry) =>
    Number.isFinite(entry.weather.growth) && Number.isFinite(entry.weather.waterUse) && Number.isFinite(entry.market)
  ));
  assert.ok(seasonalGrowthRate(8) > seasonalGrowthRate(1));
  assert.ok(seasonalMarketMultiplier(22) > seasonalMarketMultiplier(1));
  for (const day of [1, 8, 15, 22, 29, 36, 57, 85, 113, 365]) {
    const weather = weatherForDay(day);
    assert.ok(Number.isFinite(weather.waterUse) && weather.waterUse > 0);
    assert.ok(Number.isFinite(weather.growth) && weather.growth > 0);
    assert.ok(Number.isFinite(seasonalMarketMultiplier(day)) && seasonalMarketMultiplier(day) > 0);
  }
});

test('seasonal climates affect outdoor plants and buyer pricing while indoor rooms remain climate controlled', () => {
  const main = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
  const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  const css = readFileSync(new URL('../src/style.css', import.meta.url), 'utf8');
  assert.ok(main.includes("import { seasonForDay, weatherForDay, seasonalMarketMultiplier } from './seasons.js'"));
  assert.ok(main.includes('const outdoorGrowth = conditions.growth'));
  assert.ok(main.includes(': outdoorGrowth)) / (RIPE_TIME'));
  assert.ok(main.includes('seasonalMarketMultiplier(order.day)'));
  assert.ok(main.includes('seasonalMarketMultiplier(Math.floor(dayClock) + 1)'));
  assert.ok(main.includes('Greenhouse and warehouse growing conditions are climate controlled.'));
  assert.ok(main.includes('SEASON_SKY[calendar.id]'));
  assert.ok(main.includes('SEASON_HORIZON[calendar.id]'));
  assert.ok(main.includes('SEASON_GROUND[calendar.id]'));
  assert.ok(main.includes('calendar.event.name} — ${calendar.event.detail}'));
  assert.ok(main.includes('dayEl.textContent = `D${day} · ${calendar.name}`'));
  assert.ok(main.includes('function renderWeatherForecast(day = Math.floor(dayClock) + 1)'));
  assert.ok(main.includes('weatherForecast(day, 3)'));
  assert.ok(html.includes('id="weather-forecast"'));
  assert.ok(html.includes('aria-controls="weather-forecast"'));
  assert.ok(css.includes('.forecast-panel'));
  assert.ok(html.includes('id="clock-day"'));
  assert.ok(main.includes('dayEl.textContent = `D${day} · ${calendar.name}`'));
  assert.ok(!css.includes('.season[data-season="summer"]'));
  assert.ok(css.includes('.weather[data-weather="frost"]'));
});
