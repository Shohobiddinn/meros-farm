/*
 * Meros web app
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.62
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MerosWebApp);
  }
}(this, function(expect, MerosWebApp) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MerosWebApp.TradeSectionApi();
  });

  describe('(package)', function() {
    describe('TradeSectionApi', function() {
      describe('getTradesTradeGet', function() {
        it('should call getTradesTradeGet successfully', function(done) {
          // TODO: uncomment, update parameter values for getTradesTradeGet call and complete the assertions
          /*
          var opts = {};

          instance.getTradesTradeGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('productUpdateTradeUpdatePut', function() {
        it('should call productUpdateTradeUpdatePut successfully', function(done) {
          // TODO: uncomment, update parameter values for productUpdateTradeUpdatePut call and complete the assertions
          /*

          instance.productUpdateTradeUpdatePut(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
