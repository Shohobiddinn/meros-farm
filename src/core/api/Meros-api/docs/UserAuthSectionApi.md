# MerosWebApp.UserAuthSectionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginForAccessTokenAuthTokenPost**](UserAuthSectionApi.md#loginForAccessTokenAuthTokenPost) | **POST** /auth/token | Login For Access Token

<a name="loginForAccessTokenAuthTokenPost"></a>
# **loginForAccessTokenAuthTokenPost**
> Object loginForAccessTokenAuthTokenPost(grantType, username, password, scope, clientId, clientSecret)

Login For Access Token

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';

let apiInstance = new MerosWebApp.UserAuthSectionApi();
let grantType = "grantType_example"; // String | 
let username = "username_example"; // String | 
let password = "password_example"; // String | 
let scope = "scope_example"; // String | 
let clientId = "clientId_example"; // String | 
let clientSecret = "clientSecret_example"; // String | 

apiInstance.loginForAccessTokenAuthTokenPost(grantType, username, password, scope, clientId, clientSecret, (error, data, response) => {
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
 **grantType** | **String**|  | 
 **username** | **String**|  | 
 **password** | **String**|  | 
 **scope** | **String**|  | 
 **clientId** | **String**|  | 
 **clientSecret** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

