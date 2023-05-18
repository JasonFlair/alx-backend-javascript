const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const { describe, it } = require('mocha');
const sinon = require("sinon");
const Utils = require("./utils")

describe('sendPaymentRequestToApi', function() {
  it('check that calculateNumber is stubbed to always return 10', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy.calledOnceWithExactly('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });
});