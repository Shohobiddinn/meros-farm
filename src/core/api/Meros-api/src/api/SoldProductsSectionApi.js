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
import ApiClient from "../ApiClient";
import HTTPValidationError from '../model/HTTPValidationError';
import SoldProductBase from '../model/SoldProductBase';
import SoldProductUpdate from '../model/SoldProductUpdate';

/**
* SoldProductsSection service.
* @module api/SoldProductsSectionApi
* @version 0.1.0
*/
export default class SoldProductsSectionApi {

    /**
    * Constructs a new SoldProductsSectionApi. 
    * @alias module:api/SoldProductsSectionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addSoldProductSoldProductsAddPost operation.
     * @callback moduleapi/SoldProductsSectionApi~addSoldProductSoldProductsAddPostCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Sold Product
     * @param {module:model/SoldProductBase} body 
     * @param {module:api/SoldProductsSectionApi~addSoldProductSoldProductsAddPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    addSoldProductSoldProductsAddPost(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addSoldProductSoldProductsAddPost");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/sold_products/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getSoldProductsSoldProductsGet operation.
     * @callback moduleapi/SoldProductsSectionApi~getSoldProductsSoldProductsGetCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sold Products
     * @param {Object} opts Optional parameters
     * @param {String} opts.search 
     * @param {Boolean} opts.status 
     * @param {String} opts.companyName 
     * @param {Number} opts.branchId  (default to <.>)
     * @param {Number} opts.orderId  (default to <.>)
     * @param {Number} opts.id  (default to <.>)
     * @param {Number} opts.page  (default to <.>)
     * @param {Number} opts.limit  (default to <.>)
     * @param {module:api/SoldProductsSectionApi~getSoldProductsSoldProductsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getSoldProductsSoldProductsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'search': opts['search'],'status': opts['status'],'company_name': opts['companyName'],'branch_id': opts['branchId'],'order_id': opts['orderId'],'id': opts['id'],'page': opts['page'],'limit': opts['limit']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/sold_products/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the soldProductUpdateSoldProductsUpdatePut operation.
     * @callback moduleapi/SoldProductsSectionApi~soldProductUpdateSoldProductsUpdatePutCallback
     * @param {String} error Error message, if any.
     * @param {Object{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sold Product Update
     * @param {module:model/SoldProductUpdate} body 
     * @param {module:api/SoldProductsSectionApi~soldProductUpdateSoldProductsUpdatePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    soldProductUpdateSoldProductsUpdatePut(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling soldProductUpdateSoldProductsUpdatePut");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['OAuth2PasswordBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Object;

      return this.apiClient.callApi(
        '/sold_products/update', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}