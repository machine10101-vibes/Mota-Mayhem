export const COMPOST_CAP = 8;
export const SCRAP_CAP = 16;

export function gainScrap(scraps) {
  return Math.min(SCRAP_CAP, Math.max(0, scraps | 0) + 1);
}

export function dumpScraps(scraps, fill) {
  const have = Math.max(0, scraps | 0);
  const piled = Math.max(0, Math.min(COMPOST_CAP, fill | 0));
  const n = Math.min(have, COMPOST_CAP - piled);
  return { scraps: have - n, fill: piled + n, n };
}

/** Adding fresh scraps to a cooking pile pulls the average back. */
export function blendCook(t, oldFill, added) {
  const before = Math.max(0, oldFill | 0);
  const next = before + Math.max(0, added | 0);
  if (next <= 0 || before <= 0) return 0;
  return Math.min(1, ((Number(t) || 0) * before) / next);
}

export function turnCompost(nutrients, fill, ready) {
  const piled = Math.max(0, fill | 0);
  if (!ready || piled <= 0) return { nutrients: nutrients | 0, fill: piled, n: 0 };
  return { nutrients: (nutrients | 0) + piled, fill: 0, n: piled };
}

export function cookProgress(t, dt, duration) {
  const cur = Math.min(1, Math.max(0, Number(t) || 0));
  if (!(duration > 0) || !(dt > 0)) return cur;
  return Math.min(1, cur + dt / duration);
}
