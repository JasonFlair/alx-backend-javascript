const Utils = require('./utils');
// couldve done const { calculateNumber } = require('./utils');
// but somehow it wouldnt pass the unittest
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const res = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${res}`);
}

module.exports = sendPaymentRequestToApi;