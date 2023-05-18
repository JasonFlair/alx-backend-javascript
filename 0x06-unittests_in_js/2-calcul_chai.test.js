const { expect } = require('chai');
const { it, describe } = require("mocha");
const calculateNumber = require('./1-calcul');
describe('calculateNumber', function () {
  it(`checking if numbers round`, function() {
    const res = calculateNumber("SUM", 1, 2);
    expect(res).to.equal(3);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("SUBTRACT", 1.4, 2.2);
    expect(res).to.equal(-1);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("SUBTRACT", 4.9, 2.7);
    expect(res).to.equal(2);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("DIVIDE", 4, 2);
    expect(res).to.equal(2);
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("DIVIDE", 1.7, 0);
    expect(res).to.equal("Error");
  });
  it(`checking if numbers round`, function() {
    const res = calculateNumber("DIVIDE", 1.4, 4.6);
    expect(res).to.equal(0.2);
  });
});