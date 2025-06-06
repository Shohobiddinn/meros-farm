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
 * The BasketUpdate model module.
 * @module model/BasketUpdate
 * @version 0.1.0
 */
export default class BasketUpdate {
  /**
   * Constructs a new <code>BasketUpdate</code>.
   * @alias module:model/BasketUpdate
   * @class
   * @param id {Number} 
   */
  constructor(id) {
    this.id = id;
  }

  /**
   * Constructs a <code>BasketUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BasketUpdate} obj Optional instance to populate.
   * @return {module:model/BasketUpdate} The populated <code>BasketUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BasketUpdate();
      if (data.hasOwnProperty('product_id'))
        obj.productId = ApiClient.convertToType(data['product_id'], 'Number');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} productId
 */
BasketUpdate.prototype.productId = undefined;

/**
 * @member {Number} _number
 */
BasketUpdate.prototype._number = undefined;

/**
 * @member {Number} id
 */
BasketUpdate.prototype.id = undefined;

