import React from "react";

import ApplicationTheme from "./core/CommonPages/Layout/ApplicationTheme";
import SnackbarProvider from "./core/utils/SnackbarProvider";
import MsalAuthentication from "./core/authentication/MsalAuthentication";
import Root from "./Root";

import Localization from "./core/utils/localization";

function App() {
  Localization.initialize();
  return (
    <ApplicationTheme>
      <SnackbarProvider>
        {/* <MsalAuthentication> */} // Azure AD Login deaktiviert
        <Root />
        {/* </MsalAuthentication> */}
      </SnackbarProvider>
    </ApplicationTheme>
  );
}

export default App;
