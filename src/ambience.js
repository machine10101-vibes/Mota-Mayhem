/** Smooth night blend for the estate's ambient life, using the same sun arc as the world lighting. */
export function nightIntensity(dayFraction = 0) {
  const t = Number.isFinite(Number(dayFraction)) ? ((Number(dayFraction) % 1) + 1) % 1 : 0;
  const elevation = Math.sin(t * Math.PI * 2);
  const x = Math.max(0, Math.min(1, (elevation + 0.12) / 0.3));
  const smooth = x * x * (3 - 2 * x);
  return 1 - smooth;
}
