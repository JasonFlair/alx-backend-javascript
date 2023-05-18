const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const { describe, it } = require('mocha');
const sinon = require("sinon");

describe('sendPaymentRequestToApi', function() {
  this.beforeEach(function() {
    sinon.spy(console, 'log');
  });
  this.afterEach(function() {
    console.log.restore();
  });
  it('verifies that the console is logging the string The total is: 120', function () {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledOnceWithExactly('The total is: 120')).to.be.true;
  });
  it('verifies that the console is logging the string The total is: 20', function () {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledOnceWithExactly('The total is: 20')).to.be.true;
  });
});