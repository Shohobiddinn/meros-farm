
import * as MerosApi from "@/core/api/Meros-api";

export function TokenUpdater(token) {
  MerosApi.ApiClient.instance.authentications.type = "Bearer";
  MerosApi.ApiClient.instance.authentications.Bearer.type = "oauth2";
  MerosApi.ApiClient.instance.authentications.Bearer.accessToken = token;
}
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    let res = JSON.parse(this.response);
    if (location.hostname == "localhost") {
      MerosApi.ApiClient.instance.authentications.type = "Bearer";
      MerosApi.ApiClient.instance.authentications.Bearer.type = "oauth2";
      MerosApi.ApiClient.instance.basePath = res.dev.basePath;
    } else {
      MerosApi.ApiClient.instance.authentications.type = "Bearer";
      MerosApi.ApiClient.instance.authentications.Bearer.type = "oauth2";
      MerosApi.ApiClient.instance.basePath = res.prod.basePath;
    }
  }
});
xhr.open("GET", "/config.json", false);
xhr.setRequestHeader("Accept", "*/*");
// via Cache-Control header:
xhr.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
// fallbacks for IE and older browsers:
xhr.setRequestHeader("Pragma", "no-cache");
xhr.setRequestHeader(
  "Content-type",
  "application/x-www-form-urlencoded; charset=ISO-8859-1"
);
xhr.send();
export const AllApi = {
  UserApi: new MerosApi.UserAuthSectionApi(),
  UserInfoApi: new MerosApi.UserSectionApi(),
  BasketApi: new MerosApi.BasketSectionApi(),
  ProductsApi: new MerosApi.ProductsSectionApi(),
  OrderSectionApi: new MerosApi.OrderSectionApi(),
  SoldProductsSectionApi: new MerosApi.SoldProductsSectionApi(),
  TradeSectionApi: new MerosApi.TradeSectionApi(),

};