# MerosWebApp.OrderSectionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addOrderOrderAddPost**](OrderSectionApi.md#addOrderOrderAddPost) | **POST** /order/add | Add Order
[**getOrdersOrderGet**](OrderSectionApi.md#getOrdersOrderGet) | **GET** /order/ | Get Orders

<a name="addOrderOrderAddPost"></a>
# **addOrderOrderAddPost**
> Object addOrderOrderAddPost(body)

Add Order

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.OrderSectionApi();
let body = new MerosWebApp.OrderCreate(); // OrderCreate | 

apiInstance.addOrderOrderAddPost(body, (error, data, response) => {
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
 **body** | [**OrderCreate**](OrderCreate.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOrdersOrderGet"></a>
# **getOrdersOrderGet**
> Object getOrdersOrderGet(opts)

Get Orders

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.OrderSectionApi();
let opts = { 
  'status': true, // Boolean | 
  'id': 0, // Number | 
  'page': 1, // Number | 
  'limit': 25 // Number | 
};
apiInstance.getOrdersOrderGet(opts, (error, data, response) => {
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
 **status** | **Boolean**|  | [optional] 
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

