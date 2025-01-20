# MerosWebApp.BasketSectionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBasketBasketAddPost**](BasketSectionApi.md#addBasketBasketAddPost) | **POST** /basket/add | Add Basket
[**basketUpdateBasketUpdatePut**](BasketSectionApi.md#basketUpdateBasketUpdatePut) | **PUT** /basket/update | Basket Update
[**getBasketBasketGet**](BasketSectionApi.md#getBasketBasketGet) | **GET** /basket/ | Get Basket

<a name="addBasketBasketAddPost"></a>
# **addBasketBasketAddPost**
> Object addBasketBasketAddPost(body)

Add Basket

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.BasketSectionApi();
let body = new MerosWebApp.BasketCreate(); // BasketCreate | 

apiInstance.addBasketBasketAddPost(body, (error, data, response) => {
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
 **body** | [**BasketCreate**](BasketCreate.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="basketUpdateBasketUpdatePut"></a>
# **basketUpdateBasketUpdatePut**
> Object basketUpdateBasketUpdatePut(body)

Basket Update

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.BasketSectionApi();
let body = new MerosWebApp.BasketUpdate(); // BasketUpdate | 

apiInstance.basketUpdateBasketUpdatePut(body, (error, data, response) => {
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
 **body** | [**BasketUpdate**](BasketUpdate.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBasketBasketGet"></a>
# **getBasketBasketGet**
> Object getBasketBasketGet(opts)

Get Basket

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.BasketSectionApi();
let opts = { 
  'status': true, // Boolean | 
  'id': 0, // Number | 
  'page': 1, // Number | 
  'limit': 25 // Number | 
};
apiInstance.getBasketBasketGet(opts, (error, data, response) => {
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

