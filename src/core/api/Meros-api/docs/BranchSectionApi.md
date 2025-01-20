# MerosWebApp.BranchSectionApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBranchBranchAddPost**](BranchSectionApi.md#addBranchBranchAddPost) | **POST** /branch/add | Add Branch
[**getBranchBranchGet**](BranchSectionApi.md#getBranchBranchGet) | **GET** /branch/ | Get Branch

<a name="addBranchBranchAddPost"></a>
# **addBranchBranchAddPost**
> Object addBranchBranchAddPost(body)

Add Branch

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.BranchSectionApi();
let body = new MerosWebApp.BranchCreate(); // BranchCreate | 

apiInstance.addBranchBranchAddPost(body, (error, data, response) => {
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
 **body** | [**BranchCreate**](BranchCreate.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBranchBranchGet"></a>
# **getBranchBranchGet**
> Object getBranchBranchGet(opts)

Get Branch

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';
let defaultClient = MerosWebApp.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MerosWebApp.BranchSectionApi();
let opts = { 
  'status': true, // Boolean | 
  'id': 0, // Number | 
  'page': 1, // Number | 
  'limit': 25 // Number | 
};
apiInstance.getBranchBranchGet(opts, (error, data, response) => {
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

