import React from "react";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { CacheProvider } from "@emotion/react";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import "./i18n";
import createTheme from "./theme";
import routes from "./routes";

import useTheme from "./hooks/useTheme";
import { store } from "./redux/store";
import createEmotionCache from "./utils/createEmotionCache";
import {AuthenticatedTemplate, useMsalAuthentication} from "@azure/msal-react";
import {InteractionType} from "@azure/msal-browser";

// import { PublicClientApplication } from "@azure/msal-browser";
// import { MsalProvider } from "@azure/msal-react";
// import { msalConfig } from "./authConfig";
// import { AuthProvider } from "./contexts/JWTContext";
// import { AuthProvider } from "./contexts/FirebaseAuthContext";
// import { AuthProvider } from "./contexts/Auth0Context";
// import { AuthProvider } from "./contexts/CognitoContext";

const clientSideEmotionCache = createEmotionCache();

function App({ emotionCache = clientSideEmotionCache }) {
  useMsalAuthentication(InteractionType.Redirect);
  //Code to delete routes by permissions
  //need more test:
  /*var routes2 = routes.slice();
  for (var itemRoute of routes2) {
      if (itemRoute.children) {
          for (var itemChild of itemRoute.children) {
              if (itemChild.path && itemChild.path.length > 0) {
                  if (itemChild.path != "sign-in" && itemChild.path != "sign-up" &&
                      itemChild.path != "reset-password" && itemChild.path != "404" &&
                      itemChild.path != "500" && itemChild.path != "*") {

                      var itemValue = CheckRol(itemChild.path, null);
                      console.log("path", itemChild.path);
                      console.log("true/false", itemValue);


                      if (!CheckRol(itemChild.path, null)) {
                          const indexNum = itemRoute.children.indexOf(itemChild);
                          itemRoute.children.splice(indexNum, 1);
                      }
                  }
              }
          }
      }
  }*/
  const content = useRoutes(routes);

  const { theme } = useTheme();

  return (
    <CacheProvider value={emotionCache}>
      <HelmetProvider>
        <Helmet
          titleTemplate="%s | LIT"
          defaultTitle="LIT - Home"
        />
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MuiThemeProvider theme={createTheme(theme)}>
              <AuthenticatedTemplate>{content}</AuthenticatedTemplate>
            </MuiThemeProvider>
          </LocalizationProvider>
        </Provider>
      </HelmetProvider>
    </CacheProvider>
  );
}

export default App;
