import React, { useEffect } from "react";
import globals from "../../p5Lib/globals";

import {
  AzureAD,
  IAzureADFunctionProps,
  AuthenticationState,
} from "react-aad-msal";
import { JwtAuthentication } from "./JwtAuthentication";
import { AuthProvider } from "./MsalAuthProvider";

import ErrorPage from "../commonPages/ErrorPage";
import LoadingPage from "../commonPages/LoadingPage";
import BlankPage from "../commonPages/BlankPage";

const MsalAuthentication = (props: { children: any }) => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = React.useState<
    boolean | undefined
  >(globals.krmCoreLogin === true ? undefined : true);
  const [aadError, setAadError] = React.useState();

  async function loginToKrmCore(loginName: string, password: string) {
    const jwtAuthentication = new JwtAuthentication();
    return await jwtAuthentication
      .authenticate(loginName, password)
      .then(() => {
        return jwtAuthentication.token;
      })
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch((reject) => {
        setIsAuthenticated(false);
        setAadError(reject.err);
      });
  }

  const timeout = useEffect(() => {
    return () => clearTimeout(setTimeout(() => {}, 2000));
  }, []);

  return (
    <AzureAD provider={AuthProvider} forceLogin={true}>
      {({ accountInfo, authenticationState, error }: IAzureADFunctionProps) => {
        if (
          authenticationState === AuthenticationState.Authenticated &&
          isAuthenticated === undefined
        ) {
          loginToKrmCore(accountInfo?.account.userName ?? "", "");
        }
        return (
          <React.Fragment>
            {authenticationState === AuthenticationState.Unauthenticated && (
              <BlankPage />
            )}
            {authenticationState === AuthenticationState.InProgress && (
              <LoadingPage />
            )}
            {authenticationState === AuthenticationState.Authenticated &&
              isAuthenticated === true && <div>{children}</div>}
            {authenticationState === AuthenticationState.Authenticated &&
              isAuthenticated === false && (
                <ErrorPage code="KrmCore Error" message={aadError} />
              )}
            {error && timeout && (
              <ErrorPage code={error.errorCode} message={error.errorMessage} />
            )}
          </React.Fragment>
        );
      }}
    </AzureAD>
  );
};

export default MsalAuthentication;
