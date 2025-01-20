# MerosWebApp.UserSectionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addUserUserAddPost**](UserSectionApi.md#addUserUserAddPost) | **POST** /user/add | Add User
[**getUserCurrentUserUserGet**](UserSectionApi.md#getUserCurrentUserUserGet) | **GET** /user/user | Get User Current
[**getUsersUserGet**](UserSectionApi.md#getUsersUserGet) | **GET** /user/ | Get Users
[**userUpdateUserUpdatePut**](UserSectionApi.md#userUpdateUserUpdatePut) | **PUT** /user/update | User Update

<a name="addUserUserAddPost"></a>
# **addUserUserAddPost**
> Object addUserUserAddPost(body)

Add User

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';

let apiInstance = new MerosWebApp.UserSectionApi();
let body = new MerosWebApp.UserCreate(); // UserCreate | 

apiInstance.addUserUserAddPost(body, (error, data, response) => {
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
 **body** | [**UserCreate**](UserCreate.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserCurrentUserUserGet"></a>
# **getUserCurrentUserUserGet**
> Object getUserCurrentUserUserGet()

Get User Current

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.UserSectionApi();
apiInstance.getUserCurrentUserUserGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUsersUserGet"></a>
# **getUsersUserGet**
> Object getUsersUserGet(opts)

Get Users

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.UserSectionApi();
let opts = { 
  'search': "search_example", // String | 
  'status': true, // Boolean | 
  'id': 0, // Number | 
  'page': 1, // Number | 
  'limit': 20 // Number | 
};
apiInstance.getUsersUserGet(opts, (error, data, response) => {
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
 **status** | **Boolean**|  | [optional] [default to true]
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

<a name="userUpdateUserUpdatePut"></a>
# **userUpdateUserUpdatePut**
> Object userUpdateUserUpdatePut(body)

User Update

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.UserSectionApi();
let body = new MerosWebApp.UserUpdate(); // UserUpdate | 

apiInstance.userUpdateUserUpdatePut(body, (error, data, response) => {
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
 **body** | [**UserUpdate**](UserUpdate.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

