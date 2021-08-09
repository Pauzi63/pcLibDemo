import React from "react";
// Msal imports
import {
  MsalAuthenticationTemplate,
  useMsal,
  useIsAuthenticated,
} from "@azure/msal-react";
import { loginRequest } from "./authConfig";

import { InteractionStatus, InteractionType } from "@azure/msal-browser";
import LoadingPage from "../commonPages/LoadingPage";
import { ErrorComponent } from "../commonPages/ErrorComponent";

interface Props {
  children?: React.ReactChild | React.ReactChild[];
}

const AADLogin = (props: Props) => {
  const { accounts } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const authRequest = {
    ...loginRequest,
  };

  React.useEffect(() => {
    console.log("AADLogin accounts changed: ", accounts);
  }, [accounts]);

  React.useEffect(() => {
    console.log("AADLogin isAuthenticated changed: ", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
      errorComponent={ErrorComponent}
      loadingComponent={LoadingPage}
    >
      {props.children}
    </MsalAuthenticationTemplate>
  );
};

export default AADLogin;
