# MerosWebApp.TradeSectionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTradesTradeGet**](TradeSectionApi.md#getTradesTradeGet) | **GET** /trade/ | Get Trades
[**productUpdateTradeUpdatePut**](TradeSectionApi.md#productUpdateTradeUpdatePut) | **PUT** /trade/update | Product Update

<a name="getTradesTradeGet"></a>
# **getTradesTradeGet**
> Object getTradesTradeGet(opts)

Get Trades

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.TradeSectionApi();
let opts = { 
  'status': true, // Boolean | 
  'tradeStatus': true, // Boolean | 
  'orderId': 56, // Number | 
  'id': 0, // Number | 
  'page': 1, // Number | 
  'limit': 20 // Number | 
};
apiInstance.getTradesTradeGet(opts, (error, data, response) => {
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
 **tradeStatus** | **Boolean**|  | [optional] 
 **orderId** | **Number**|  | [optional] 
 **id** | **Number**|  | [optional] [default to 0]
 **page** | **Number**|  | [optional] [default to 1]
 **limit** | **Number**|  | [optional] [default to 20]

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="productUpdateTradeUpdatePut"></a>
# **productUpdateTradeUpdatePut**
> Object productUpdateTradeUpdatePut(body)

Product Update

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.TradeSectionApi();
let body = new MerosWebApp.TradeUpdate(); // TradeUpdate | 

apiInstance.productUpdateTradeUpdatePut(body, (error, data, response) => {
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
 **body** | [**TradeUpdate**](TradeUpdate.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

