import React from 'react';
import globals from '../utils/Globals';

import {
  AzureAD,
  IAzureADFunctionProps,
  AuthenticationState,
} from 'react-aad-msal';
import { JwtAuthentication } from './JwtAuthentication';
import { AuthProvider } from './MsalAuthProvider';

import ErrorPage from '../pages/Common/ErrorPage';
import LoadingPage from '../pages/Common/LoadingPage';
import BlankPage from '../pages/Common/BlankPage';

const MsalAuthentication = (props: { children: any }) => {
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = React.useState<
    boolean | undefined
  >(globals.krmCoreLogin);
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

  return (
    <AzureAD provider={AuthProvider} forceLogin={true}>
      {({ accountInfo, authenticationState, error }: IAzureADFunctionProps) => {
        if (
          authenticationState === AuthenticationState.Authenticated &&
          isAuthenticated === undefined
        ) {
          loginToKrmCore(accountInfo?.account.userName ?? '', '');
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
            {error && (
              <ErrorPage code={error.errorCode} message={error.errorMessage} />
            )}
          </React.Fragment>
        );
      }}
    </AzureAD>
  );
};

export default MsalAuthentication;
