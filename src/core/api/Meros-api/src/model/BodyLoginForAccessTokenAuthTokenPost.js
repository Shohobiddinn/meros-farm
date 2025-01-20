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
import ApiClient from '../ApiClient';

/**
 * The BodyLoginForAccessTokenAuthTokenPost model module.
 * @module model/BodyLoginForAccessTokenAuthTokenPost
 * @version 0.1.0
 */
export default class BodyLoginForAccessTokenAuthTokenPost {
  /**
   * Constructs a new <code>BodyLoginForAccessTokenAuthTokenPost</code>.
   * @alias module:model/BodyLoginForAccessTokenAuthTokenPost
   * @class
   * @param username {String} 
   * @param password {String} 
   */
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  /**
   * Constructs a <code>BodyLoginForAccessTokenAuthTokenPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BodyLoginForAccessTokenAuthTokenPost} obj Optional instance to populate.
   * @return {module:model/BodyLoginForAccessTokenAuthTokenPost} The populated <code>BodyLoginForAccessTokenAuthTokenPost</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BodyLoginForAccessTokenAuthTokenPost();
      if (data.hasOwnProperty('grant_type'))
        obj.grantType = ApiClient.convertToType(data['grant_type'], 'String');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('scope'))
        obj.scope = ApiClient.convertToType(data['scope'], 'String');
      if (data.hasOwnProperty('client_id'))
        obj.clientId = ApiClient.convertToType(data['client_id'], 'String');
      if (data.hasOwnProperty('client_secret'))
        obj.clientSecret = ApiClient.convertToType(data['client_secret'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} grantType
 */
BodyLoginForAccessTokenAuthTokenPost.prototype.grantType = undefined;

/**
 * @member {String} username
 */
BodyLoginForAccessTokenAuthTokenPost.prototype.username = undefined;

/**
 * @member {String} password
 */
BodyLoginForAccessTokenAuthTokenPost.prototype.password = undefined;

/**
 * @member {String} scope
 * @default ''
 */
BodyLoginForAccessTokenAuthTokenPost.prototype.scope = '';

/**
 * @member {String} clientId
 */
BodyLoginForAccessTokenAuthTokenPost.prototype.clientId = undefined;

/**
 * @member {String} clientSecret
 */
BodyLoginForAccessTokenAuthTokenPost.prototype.clientSecret = undefined;

