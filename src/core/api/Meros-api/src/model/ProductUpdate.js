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
 * The ProductUpdate model module.
 * @module model/ProductUpdate
 * @version 0.1.0
 */
export default class ProductUpdate {
  /**
   * Constructs a new <code>ProductUpdate</code>.
   * @alias module:model/ProductUpdate
   * @class
   * @param status {Boolean} 
   * @param id {Number} 
   */
  constructor(status, id) {
    this.status = status;
    this.id = id;
  }

  /**
   * Constructs a <code>ProductUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductUpdate} obj Optional instance to populate.
   * @return {module:model/ProductUpdate} The populated <code>ProductUpdate</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProductUpdate();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'Number');
      if (data.hasOwnProperty('id_number'))
        obj.idNumber = ApiClient.convertToType(data['id_number'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'Number');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'Number');
      if (data.hasOwnProperty('is_ordered'))
        obj.isOrdered = ApiClient.convertToType(data['is_ordered'], 'Number');
      if (data.hasOwnProperty('price100'))
        obj.price100 = ApiClient.convertToType(data['price100'], 'Number');
      if (data.hasOwnProperty('price25'))
        obj.price25 = ApiClient.convertToType(data['price25'], 'Number');
      if (data.hasOwnProperty('percentage'))
        obj.percentage = ApiClient.convertToType(data['percentage'], 'Number');
      if (data.hasOwnProperty('deadline'))
        obj.deadline = ApiClient.convertToType(data['deadline'], 'Date');
      if (data.hasOwnProperty('company_name'))
        obj.companyName = ApiClient.convertToType(data['company_name'], 'Number');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Boolean');
      if (data.hasOwnProperty('branch_id'))
        obj.branchId = ApiClient.convertToType(data['branch_id'], 'Number');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} code
 */
ProductUpdate.prototype.code = undefined;

/**
 * @member {Number} idNumber
 */
ProductUpdate.prototype.idNumber = undefined;

/**
 * @member {Number} name
 */
ProductUpdate.prototype.name = undefined;

/**
 * @member {Number} _number
 */
ProductUpdate.prototype._number = undefined;

/**
 * @member {Number} isOrdered
 */
ProductUpdate.prototype.isOrdered = undefined;

/**
 * @member {Number} price100
 */
ProductUpdate.prototype.price100 = undefined;

/**
 * @member {Number} price25
 */
ProductUpdate.prototype.price25 = undefined;

/**
 * @member {Number} percentage
 */
ProductUpdate.prototype.percentage = undefined;

/**
 * @member {Date} deadline
 */
ProductUpdate.prototype.deadline = undefined;

/**
 * @member {Number} companyName
 */
ProductUpdate.prototype.companyName = undefined;

/**
 * @member {Boolean} status
 */
ProductUpdate.prototype.status = undefined;

/**
 * @member {Number} branchId
 */
ProductUpdate.prototype.branchId = undefined;

/**
 * @member {Number} id
 */
ProductUpdate.prototype.id = undefined;

