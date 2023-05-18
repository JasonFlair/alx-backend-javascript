function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);
  if (type === 'SUM') {
    const sum = (a + b);
    return sum;
  } else if (type === 'SUBTRACT') {
    const diff = (a - b);
    return diff;
  } else if (type === 'DIVIDE') {
    if (a === 0 || b === 0) {
      return 'Error';
    }
    const div = (a / b);
    return div;
  }
}
module.exports = calculateNumber;