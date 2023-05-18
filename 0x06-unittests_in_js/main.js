const calculateNumber = require('./1-calcul');

res = calculateNumber('SUM', 1.4, 4.5)
console.log(res)
res = calculateNumber('SUBTRACT', 1.4, 4.5)
console.log(res)
res = calculateNumber('DIVIDE', 1.4, 4.5)
console.log(res)
res = calculateNumber('DIVIDE', 1.4, 0)
console.log(res)