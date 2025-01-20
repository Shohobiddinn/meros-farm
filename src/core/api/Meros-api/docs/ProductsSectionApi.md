# MerosWebApp.ProductsSectionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProductProductsAddPost**](ProductsSectionApi.md#addProductProductsAddPost) | **POST** /products/add | Add Product
[**getProductsProductsGet**](ProductsSectionApi.md#getProductsProductsGet) | **GET** /products/ | Get Products
[**productUpdateProductsUpdatePut**](ProductsSectionApi.md#productUpdateProductsUpdatePut) | **PUT** /products/update | Product Update

<a name="addProductProductsAddPost"></a>
# **addProductProductsAddPost**
> Object addProductProductsAddPost(body)

Add Product

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.ProductsSectionApi();
let body = new MerosWebApp.ProductBase(); // ProductBase | 

apiInstance.addProductProductsAddPost(body, (error, data, response) => {
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
 **body** | [**ProductBase**](ProductBase.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProductsProductsGet"></a>
# **getProductsProductsGet**
> Object getProductsProductsGet(opts)

Get Products

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.ProductsSectionApi();
let opts = { 
  'search': "search_example", // String | 
  'status': true, // Boolean | 
  'companyName': "companyName_example", // String | 
  'branchId': 0, // Number | 
  'id': 0, // Number | 
  'page': 1, // Number | 
  'limit': 25 // Number | 
};
apiInstance.getProductsProductsGet(opts, (error, data, response) => {
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

<a name="productUpdateProductsUpdatePut"></a>
# **productUpdateProductsUpdatePut**
> Object productUpdateProductsUpdatePut(body)

Product Update

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.ProductsSectionApi();
let body = new MerosWebApp.ProductUpdate(); // ProductUpdate | 

apiInstance.productUpdateProductsUpdatePut(body, (error, data, response) => {
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
 **body** | [**ProductUpdate**](ProductUpdate.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

