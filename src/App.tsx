import React from 'react';

import ApplicationTheme from './components/Layout/ApplicationTheme';
import SnackbarProvider from './utils/SnackbarProvider';
import MsalAuthentication from './authentication/MsalAuthentication';
import DemoApplication from './pages/DemoApplication/DemoApplication';

import Localization from './utils/Localization';

function App() {
  Localization.initialize();
  return (
    <ApplicationTheme>
      <SnackbarProvider>
        <MsalAuthentication>
          <DemoApplication />
        </MsalAuthentication>
      </SnackbarProvider>
    </ApplicationTheme>
  );
}

export default App;
