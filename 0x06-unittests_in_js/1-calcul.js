function calculateNumber(type, a, b) {
  a = Math.round(a);
  b = Math.round(b);
  if (type === 'SUM') {
    sum = (a + b);
    return sum;
  } else if (type === 'SUBTRACT') {
    diff = (a - b);
    return diff;
  } else if (type === 'DIVIDE') {
    if (a === 0 || b === 0) {
      return 'Error';
    }
    div = (a / b);
    return div;
  }
}
module.exports = calculateNumber;