# MerosWebApp.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**homeGet**](DefaultApi.md#homeGet) | **GET** / | Home

<a name="homeGet"></a>
# **homeGet**
> Object homeGet()

Home

### Example
```javascript
import {MerosWebApp} from 'meros_web_app';

let apiInstance = new MerosWebApp.DefaultApi();
apiInstance.homeGet((error, data, response) => {
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

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

