import React from "react";

import ApplicationTheme from "./p5coreLib/context/ApplicationTheme";
import SnackbarProvider from "./p5coreLib/components/SnackbarProvider";
// import MsalAuthentication from "./p5coreLib/authentication/MsalAuthentication";
import Root from "./Root";

import Localization from "./p5coreLib/utils/localization";

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import AADLogin from "./p5coreLib/authentication/AADLogin";

type AppProps = {
  pca: IPublicClientApplication;
};

function App({ pca }: AppProps) {
  Localization.initialize();
  return (
    <MsalProvider instance={pca}>
      <ApplicationTheme>
        <SnackbarProvider>
          <AADLogin>
            <Root />
          </AADLogin>
        </SnackbarProvider>
      </ApplicationTheme>
    </MsalProvider>
  );
}

export default App;
