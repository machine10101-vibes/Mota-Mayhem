const GRADES = ['A', 'AA', 'AAA', 'AAAA'];

export function saleableJars(jars = {}, order = null) {
  const keepGrade = order && !order.claimed && GRADES.includes(order.grade) ? order.grade : null;
  const keepCount = keepGrade ? Math.max(0, Math.floor(Number(order.count) || 0)) : 0;
  return Object.fromEntries(GRADES.map((grade) => {
    const stocked = Math.max(0, Math.floor(Number(jars?.[grade]) || 0));
    const protectedCount = grade === keepGrade ? Math.min(stocked, keepCount) : 0;
    return [grade, stocked - protectedCount];
  }));
}

export function burpJar(item) {
  if (!item || item.sealed || !item.needsBurp || item.burped || item.missed) return null;
  const cure = Number(item.cure);
  if (!Number.isFinite(cure) || cure < 0.4 || cure >= 0.62) return null;
  const perfect = cure <= 0.46;
  const index = GRADES.indexOf(item.grade);
  const upgraded = perfect && index >= 0 && index < GRADES.length - 1;
  if (upgraded) item.grade = GRADES[index + 1];
  item.burped = true;
  item.needsBurp = false;
  return { perfect, upgraded };
}
