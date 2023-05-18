const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("test / route", function() {
    const options = {
      url: "http://localhost:7865/",
      method: "GET"
    }
    it("check correct status code", function(done) {
			request(options, function(err, res, body) {
					expect(res.statusCode).to.equal(200);
					done();
			});
    });
    it("check correct content", function(done) {
			request(options, function(err, res, body) {
					expect(body).to.contain("Welcome to the payment system");
					done();
			});
    });
    it("check correct content length", function(done) {
			request(options, function(err, res, body) {
					expect(res.headers['content-length']).to.equal('29');
					done();
			});
    });
});

describe('test /cart/:id route', function () {
	it('should have a 400 response status if id is not a number', function(done) {
		const options = {
			url: 'http://localhost:7865/cart/bread',
			method: 'GET'
		}
		request(options, (error, response, body) => {
			expect(response.statusCode).to.equal(404);
			done();
		})
	});
	it('should respond with Payment methods for cart ${request.params.id}', function(done) {
		const options = {
			url: 'http://localhost:7865/cart/2',
			method: 'GET'
		}
		request(options, (error, response, body) => {
			expect(response.body).to.equal('Payment methods for cart 2');
			done();
		})
	});
});