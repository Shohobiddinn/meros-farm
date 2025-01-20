# MerosWebApp.SoldProductsSectionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSoldProductSoldProductsAddPost**](SoldProductsSectionApi.md#addSoldProductSoldProductsAddPost) | **POST** /sold_products/add | Add Sold Product
[**getSoldProductsSoldProductsGet**](SoldProductsSectionApi.md#getSoldProductsSoldProductsGet) | **GET** /sold_products/ | Get Sold Products
[**soldProductUpdateSoldProductsUpdatePut**](SoldProductsSectionApi.md#soldProductUpdateSoldProductsUpdatePut) | **PUT** /sold_products/update | Sold Product Update

<a name="addSoldProductSoldProductsAddPost"></a>
# **addSoldProductSoldProductsAddPost**
> Object addSoldProductSoldProductsAddPost(body)

Add Sold Product

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.SoldProductsSectionApi();
let body = new MerosWebApp.SoldProductBase(); // SoldProductBase | 

apiInstance.addSoldProductSoldProductsAddPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SoldProductBase**](SoldProductBase.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSoldProductsSoldProductsGet"></a>
# **getSoldProductsSoldProductsGet**
> Object getSoldProductsSoldProductsGet(opts)

Get Sold Products

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.SoldProductsSectionApi();
let opts = { 
  'search': "search_example", // String | 
  'status': true, // Boolean | 
  'companyName': "companyName_example", // String | 
  'branchId': 0, // Number | 
  'orderId': 0, // Number | 
  'id': 0, // Number | 
  'page': 1, // Number | 
  'limit': 25 // Number | 
};
apiInstance.getSoldProductsSoldProductsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search** | **String**|  | [optional] 
 **status** | **Boolean**|  | [optional] 
 **companyName** | **String**|  | [optional] 
 **branchId** | **Number**|  | [optional] [default to 0]
 **orderId** | **Number**|  | [optional] [default to 0]
 **id** | **Number**|  | [optional] [default to 0]
 **page** | **Number**|  | [optional] [default to 1]
 **limit** | **Number**|  | [optional] [default to 25]

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="soldProductUpdateSoldProductsUpdatePut"></a>
# **soldProductUpdateSoldProductsUpdatePut**
> Object soldProductUpdateSoldProductsUpdatePut(body)

Sold Product Update

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.SoldProductsSectionApi();
let body = new MerosWebApp.SoldProductUpdate(); // SoldProductUpdate | 

apiInstance.soldProductUpdateSoldProductsUpdatePut(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SoldProductUpdate**](SoldProductUpdate.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

