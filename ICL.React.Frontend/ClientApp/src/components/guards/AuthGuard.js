import React from "react";
// import {useMsal} from "@azure/msal-react";
// import {loginRequest} from "../../authConfig";
// import { Navigate } from "react-router-dom";

// import useAuth from "../../hooks/useAuth";

// import { isValidToken } from "../../utils/jwt";

// For routes that can only be accessed by authenticated users
function AuthGuard({ children }) {
  // const accessToken = window.localStorage.getItem("accessToken");
  // const { isAuthenticated, isInitialized } = useAuth();
  // const { instance, accounts } = useMsal();
  // const isAuthenticated = useIsAuthenticated();

  // console.log(isAuthenticated);
  // console.log(accounts);

  // if (accounts.length == 0) {
  //   instance.loginRedirect(loginRequest).catch((e) => {
  //     console.log(e);
  //   });
  // }

  // if (!isValidToken(accessToken) || (isInitialized && !isAuthenticated)) {
  //   return <Navigate to="/auth/sign-in" />;
  // }

  return <React.Fragment>{children}</React.Fragment>;
}

export default AuthGuard;
