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

  describe('(package)', function() {
    describe('BodyLoginForAccessTokenAuthTokenPost', function() {
      beforeEach(function() {
        instance = new MerosWebApp.BodyLoginForAccessTokenAuthTokenPost();
      });

      it('should create an instance of BodyLoginForAccessTokenAuthTokenPost', function() {
        // TODO: update the code to test BodyLoginForAccessTokenAuthTokenPost
        expect(instance).to.be.a(MerosWebApp.BodyLoginForAccessTokenAuthTokenPost);
      });

      it('should have the property grantType (base name: "grant_type")', function() {
        // TODO: update the code to test the property grantType
        expect(instance).to.have.property('grantType');
        // expect(instance.grantType).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property scope (base name: "scope")', function() {
        // TODO: update the code to test the property scope
        expect(instance).to.have.property('scope');
        // expect(instance.scope).to.be(expectedValueLiteral);
      });

      it('should have the property clientId (base name: "client_id")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property clientSecret (base name: "client_secret")', function() {
        // TODO: update the code to test the property clientSecret
        expect(instance).to.have.property('clientSecret');
        // expect(instance.clientSecret).to.be(expectedValueLiteral);
      });

    });
  });

}));
