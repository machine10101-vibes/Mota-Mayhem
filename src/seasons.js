const SEASONS = [
  {
    id: 'spring', name: 'SPRING', description: 'NEW GROWTH · BALANCED MOISTURE',
    growth: 1.08, water: 0.94, market: 1.03, color: '#a9dc82',
    events: [
      { name: 'SEED EXCHANGE', detail: 'Local growers trade rare genetics. Seedling growth and buyer demand rise.', growth: 1.04, water: 1, market: 1.1 },
      { name: 'POLLINATOR BLOOM', detail: 'The yard is alive with pollinators. Outdoor growth gets a gentle boost.', growth: 1.1, water: 1, market: 1 },
      { name: 'RAIN GARDEN WEEK', detail: 'Soft spring weather keeps the soil damp for longer.', growth: 1.02, water: 0.88, market: 1.02 },
      { name: 'GARDEN SHOWCASE', detail: 'The co-op is scouting standout cultivars. Buyer offers improve.', growth: 1, water: 1, market: 1.18 },
    ],
    weather: [
      { id: 'clear', label: 'CLEAR', detail: 'BRIGHT SKIES', waterUse: 1, growth: 1 },
      { id: 'cloudy', label: 'CLOUDY', detail: 'SOFT LIGHT · SLOWER DRYING', waterUse: 0.92, growth: 0.98 },
      { id: 'showers', label: 'SHOWERS', detail: 'RAIN AT DAWN · SLOWER DRYING', waterUse: 0.82, growth: 1, rain: true },
      { id: 'breezy', label: 'BREEZY', detail: 'FRESH AIR · FASTER DRYING', waterUse: 1.1, growth: 1.02 },
      { id: 'fog', label: 'MORNING FOG', detail: 'COOL AIR · LOW EVAPORATION', waterUse: 0.86, growth: 0.96 },
      { id: 'showers', label: 'SHOWERS', detail: 'RAIN AT DAWN · SLOWER DRYING', waterUse: 0.82, growth: 1, rain: true },
      { id: 'warm', label: 'WARM', detail: 'MILD SUN · SOIL DRIES FASTER', waterUse: 1.15, growth: 1.04 },
    ],
  },
  {
    id: 'summer', name: 'SUMMER', description: 'LONG DAYS · HIGH WATER DEMAND',
    growth: 1.04, water: 1.1, market: 1.1, color: '#ffd27c',
    events: [
      { name: 'LONG DAYS', detail: 'Extended daylight helps outdoor plants push through growth.', growth: 1.08, water: 1, market: 1 },
      { name: 'HEAT WATCH', detail: 'The grower co-op warns of heat stress. Watch outdoor soil closely.', growth: 0.96, water: 1.08, market: 1.02 },
      { name: 'NIGHT MARKET', detail: 'Late-night buyers pay a premium for carefully cured jars.', growth: 1, water: 1, market: 1.2 },
      { name: 'SOLSTICE FAIR', detail: 'The biggest summer gathering brings strong buyer demand.', growth: 1.04, water: 1, market: 1.16 },
    ],
    weather: [
      { id: 'clear', label: 'CLEAR', detail: 'STRONG SUN · SOIL DRIES FASTER', waterUse: 1.12, growth: 1.04 },
      { id: 'warm', label: 'HOT', detail: 'HIGH HEAT · CHECK OUTDOOR WATER', waterUse: 1.2, growth: 1.02 },
      { id: 'heatwave', label: 'HEATWAVE', detail: 'INTENSE SUN · RAPID WATER LOSS', waterUse: 1.22, growth: 0.94 },
      { id: 'clear', label: 'CLEAR', detail: 'STRONG SUN · SOIL DRIES FASTER', waterUse: 1.12, growth: 1.04 },
      { id: 'breezy', label: 'BREEZY', detail: 'WARM WIND · FASTER DRYING', waterUse: 1.18, growth: 1 },
      { id: 'showers', label: 'SHOWERS', detail: 'SUMMER RAIN AT DAWN', waterUse: 0.9, growth: 1, rain: true },
      { id: 'haze', label: 'SUN HAZE', detail: 'DRY AIR · ELEVATED WATER USE', waterUse: 1.22, growth: 0.98 },
    ],
  },
  {
    id: 'autumn', name: 'AUTUMN', description: 'COOLER NIGHTS · PREMIUM HARVEST SEASON',
    growth: 0.97, water: 0.92, market: 1.16, color: '#e9a36c',
    events: [
      { name: 'CULTIVAR SHOW', detail: 'Collectors are comparing genetics. Well-finished jars attract attention.', growth: 1, water: 1, market: 1.12 },
      { name: 'HARVEST RUSH', detail: 'The regional harvest brings a surge in buyer demand.', growth: 1, water: 1, market: 1.22 },
      { name: 'GOLDEN WEEK', detail: 'Mild days and cool nights create steady outdoor conditions.', growth: 1.04, water: 0.96, market: 1.02 },
      { name: 'CO-OP SHOWCASE', detail: 'The grower co-op rewards consistent quality and careful curing.', growth: 1, water: 1, market: 1.16 },
    ],
    weather: [
      { id: 'cloudy', label: 'OVERCAST', detail: 'COOL SKIES · SLOWER DRYING', waterUse: 0.92, growth: 0.98 },
      { id: 'fog', label: 'VALLEY FOG', detail: 'COOL AIR · LOW EVAPORATION', waterUse: 0.84, growth: 0.94 },
      { id: 'showers', label: 'SHOWERS', detail: 'AUTUMN RAIN AT DAWN', waterUse: 0.78, growth: 0.98, rain: true },
      { id: 'breezy', label: 'BREEZY', detail: 'COOL WIND · FASTER DRYING', waterUse: 1.08, growth: 0.98 },
      { id: 'storm', label: 'THUNDERSTORMS', detail: 'HEAVY RAIN AT DAWN', waterUse: 0.8, growth: 0.92, rain: true },
      { id: 'cloudy', label: 'OVERCAST', detail: 'COOL SKIES · SLOWER DRYING', waterUse: 0.92, growth: 0.98 },
      { id: 'clear', label: 'CRISP CLEAR', detail: 'COOL NIGHTS · GENTLE SUN', waterUse: 0.9, growth: 1 },
    ],
  },
  {
    id: 'winter', name: 'WINTER', description: 'SHORT DAYS · INDOOR GARDENS SHINE',
    growth: 0.9, water: 0.78, market: 1.12, color: '#a9c9f2',
    events: [
      { name: 'FROST WATCH', detail: 'Cold nights slow outdoor growth. Indoor rooms stay climate-controlled.', growth: 0.94, water: 0.92, market: 1.02 },
      { name: 'AURORA NIGHTS', detail: 'A rare sky show draws collectors to the night market.', growth: 1, water: 1, market: 1.1 },
      { name: 'QUIET SEASON', detail: 'Fewer buyers are in town. Patient growers plan their next cycle.', growth: 1, water: 1, market: 0.96 },
      { name: 'NEW YEAR EXCHANGE', detail: 'The season closes with a premium genetics and harvest exchange.', growth: 1, water: 1, market: 1.24 },
    ],
    weather: [
      { id: 'cloudy', label: 'COLD CLOUDS', detail: 'SHORT DAYS · SLOW OUTDOOR GROWTH', waterUse: 0.8, growth: 0.94 },
      { id: 'frost', label: 'FROST', detail: 'COLD MORNING · PROTECT OUTDOOR PLOTS', waterUse: 0.7, growth: 0.82 },
      { id: 'snow', label: 'LIGHT SNOW', detail: 'FROZEN AIR · VERY SLOW OUTDOOR GROWTH', waterUse: 0.72, growth: 0.78 },
      { id: 'clear', label: 'WINTER SUN', detail: 'CLEAR SKIES · SHORT DAYLIGHT', waterUse: 0.76, growth: 0.95 },
      { id: 'frost', label: 'FROST', detail: 'COLD MORNING · PROTECT OUTDOOR PLOTS', waterUse: 0.7, growth: 0.82 },
      { id: 'storm', label: 'WINTER STORM', detail: 'WET WEATHER AT DAWN', waterUse: 0.68, growth: 0.84, rain: true },
      { id: 'aurora', label: 'AURORA', detail: 'CLEAR NIGHT SKIES · RARE LIGHTS', waterUse: 0.74, growth: 0.96 },
    ],
  },
];

const SEASON_LENGTH = 28;
const YEAR_LENGTH = SEASON_LENGTH * SEASONS.length;

export function seasonForDay(day = 1) {
  const numericDay = Number(day);
  const safeDay = Number.isFinite(numericDay) ? Math.max(1, Math.floor(numericDay)) : 1;
  const year = Math.floor((safeDay - 1) / YEAR_LENGTH) + 1;
  const dayOfYear = ((safeDay - 1) % YEAR_LENGTH) + 1;
  const index = Math.floor((dayOfYear - 1) / SEASON_LENGTH);
  const season = SEASONS[index];
  const dayInSeason = ((dayOfYear - 1) % SEASON_LENGTH) + 1;
  const week = Math.floor((dayInSeason - 1) / 7) + 1;
  const event = season.events[week - 1];
  return {
    id: season.id, name: season.name, description: season.description, color: season.color,
    year, dayOfYear, dayInSeason, week, dayInWeek: ((dayInSeason - 1) % 7) + 1,
    growth: season.growth * event.growth,
    water: season.water * event.water,
    market: season.market * event.market,
    event: { name: event.name, detail: event.detail },
  };
}

export function weatherForDay(day = 1) {
  const calendar = seasonForDay(day);
  const season = SEASONS.find((item) => item.id === calendar.id);
  const index = (calendar.dayOfYear - 1) % 7;
  return { ...season.weather[index], waterUse: season.weather[index].waterUse * calendar.water, growth: season.weather[index].growth * calendar.growth };
}

/** Deterministic short-range forecast for planning outdoor care and harvests. */
export function weatherForecast(day = 1, count = 3) {
  const numericDay = Number(day);
  const firstDay = Number.isFinite(numericDay) ? Math.max(1, Math.floor(numericDay)) : 1;
  const total = Number.isFinite(Number(count)) ? Math.max(1, Math.min(7, Math.floor(Number(count)))) : 3;
  return Array.from({ length: total }, (_, index) => {
    const forecastDay = firstDay + index;
    const calendar = seasonForDay(forecastDay);
    const weather = weatherForDay(forecastDay);
    return { day: forecastDay, season: calendar.name, year: calendar.year, event: calendar.event.name, eventDetail: calendar.event.detail, market: calendar.market, weather };
  });
}

export function seasonalGrowthRate(day = 1) {
  const calendar = seasonForDay(day);
  return calendar.growth;
}

export function seasonalMarketMultiplier(day = 1) {
  return seasonForDay(day).market;
}
