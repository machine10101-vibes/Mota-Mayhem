/** Small visual-only weather profile; gameplay effects remain owned by seasons.js. */
export function weatherEffect(weather = {}) {
  const id = typeof weather?.id === 'string' ? weather.id : '';
  if (id === 'snow') {
    return { type: 'snow', interval: 0.11, burst: 2, color: 0xeaf5ff, wind: 0.22 };
  }
  if (weather?.rain || id === 'storm' || id === 'showers') {
    const storm = id === 'storm';
    return { type: 'rain', interval: storm ? 0.035 : 0.065, burst: storm ? 4 : 2, color: 0xb9d9ed, wind: storm ? 1.1 : 0.45 };
  }
  return { type: 'none', interval: 1, burst: 0, color: 0xffffff, wind: 0 };
}
