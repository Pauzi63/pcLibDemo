import {
  Configuration,
  PopupRequest,
  SilentRequest,
  LogLevel,
} from "@azure/msal-browser";
import globals from "../../p5Lib/globals";

export const msalConfig: Configuration = {
  auth: {
    clientId: `${process.env.REACT_APP_CLIENT_ID}`,
    authority:
      `${process.env.REACT_APP_LOGIN_URL}` +
      `${process.env.REACT_APP_TENANT_ID}`,
    redirectUri: process.env.REACT_APP_AUTH_REDIRECT_URI,
    postLogoutRedirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: SilentRequest = {
  scopes: globals.azureScopes,
};

// Add here the endpoints for MS Graph API services you would like to use.
// ORIGINAL "https://graph.microsoft-ppe.com/v1.0/me",
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me/",
};

export const graphConfigCalendar = {
  graphMeEndpoint:
    "https://graph.microsoft.com/v1.0/$metadata#users('christian.pauzenberger%40outlook.com')/calendarView",
};
