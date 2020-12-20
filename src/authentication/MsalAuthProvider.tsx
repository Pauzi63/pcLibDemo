import { MsalAuthProvider, LoginType } from 'react-aad-msal';
import { Configuration } from 'msal';

import globals from '../utils/Globals';
 
const config: Configuration = {
  auth: {
    authority: globals.loginUrl + globals.tenantId,
    clientId: globals.clientId,
    validateAuthority: true,
    redirectUri: process.env.REACT_APP_AUTH_REDIRECT_URI,
    postLogoutRedirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};
 
const authenticationParameters = {
  scopes: [ "User.Read", "OpenId", "profile" ]
}
 
const options = {
  loginType: LoginType.Redirect,
  tokenRefreshUri: window.location.origin + "/auth.html"
}
 
export const AuthProvider = new MsalAuthProvider(config, authenticationParameters, options)