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
  const content = useRoutes(routes);

  const { theme } = useTheme();

  return (
    <CacheProvider value={emotionCache}>
      <HelmetProvider>
        <Helmet
          titleTemplate="%s | ICL"
          defaultTitle="ICL - Home"
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
