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
