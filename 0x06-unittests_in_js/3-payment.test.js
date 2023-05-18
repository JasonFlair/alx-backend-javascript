const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const { describe, it } = require('mocha');
const sinon = require("sinon");
const Utils = require("./utils")

describe('sendPaymentRequestToApi', function() {
  it('should use the same math function as the calculateNumber function', function () {
    const spy = sinon.spy(Utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 200);
    expect(spy.calledOnce).to.be.true;
    spy.restore()
  });
});