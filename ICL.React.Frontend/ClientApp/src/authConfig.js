import {LogLevel} from "@azure/msal-browser";

const loggerCallback = (logLevel, message) => {
  console.log(message);
};

export const msalConfig = {
  auth: {
    clientId: "1bfb1ccb-01a0-4f67-bea9-553f550d8439",
    authority: "https://login.microsoftonline.com/f61c917a-efca-425a-bb2f-84a637f867f4", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "https://localhost:3000",
    postLogoutRedirectUri: "/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback,
      loggerLevel: LogLevel.Verbose,
      piiLoggingEnabled: false,
    }
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me"
};