import React from "react";

import ApplicationTheme from "./p5coreLib/commonPages/Layout/ApplicationTheme";
import SnackbarProvider from "./p5coreLib/components/SnackbarProvider";
import MsalAuthentication from "./p5coreLib/authentication/MsalAuthentication";
import Root from "./Root";

import Localization from "./p5coreLib/utils/localization";

function App() {
  Localization.initialize();
  return (
    <ApplicationTheme>
      <SnackbarProvider>
        <MsalAuthentication>
          {" "}
          // Azure AD Login deaktiviert
          <Root />
        </MsalAuthentication>
      </SnackbarProvider>
    </ApplicationTheme>
  );
}

export default App;
