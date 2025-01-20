
import browserStore from "@/core/service/browser-store";
import { AllApi, TokenUpdater } from "../api";
import router from "@/router";
import { BodyLoginForAccessTokenAuthTokenPost, AnyOfValidationErrorLocItems } from "@/core/api/Meros-api/src";
export default {
  loggedIn() {

    if (browserStore.getSession("token")) {
      TokenUpdater(browserStore.getSession("token"));
      return true;
    }
    return false;
  },

  async logIn(loginData) {
    try {
      let result = await AllApi.UserApi.loginForAccessTokenAuthTokenPost(loginData.grant_type, loginData.username, loginData.password, '', '', ''
      );
      let _loginAns = new AnyOfValidationErrorLocItems();
      _loginAns = result.data
      if (_loginAns.access_token) {
        browserStore.setSession("token", _loginAns.access_token);
        browserStore.setSession("user", _loginAns);

        return { isOk: true }
      } else {
        throw new Error(result.data);
      }

    } catch (err) {
      return {
        isOk: false,
        message: "Authentication failed",
        error: err,
      };
    }
  },

  async logOut() {

    browserStore.delSession("token");

    TokenUpdater(undefined);
    router.push("login");
    // window.location.reload();
  },

  async getUser() {
    try {
      // Send request

      return {
        isOk: true,
        data: this._user,
      };
    } catch {
      return {
        isOk: false,
      };
    }
  },

  async resetPassword(email) {
    try {
      // Send request
      console.log(email);

      return {
        isOk: true,
      };
    } catch {
      return {
        isOk: false,
        message: "Failed to reset password",
      };
    }
  },

  async changePassword(email, recoveryCode) {
    try {
      // Send request
      console.log(email, recoveryCode);

      return {
        isOk: true,
      };
    } catch {
      return {
        isOk: false,
        message: "Failed to change password",
      };
    }
  },

  async createAccount(email, password) {
    try {
      // Send request
      console.log(email, password);

      return {
        isOk: true,
      };
    } catch {
      return {
        isOk: false,
        message: "Failed to create account",
      };
    }
  },
};
