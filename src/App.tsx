import React from 'react';

import ApplicationTheme from './components/Layout/ApplicationTheme';
import SnackbarProvider from './utils/SnackbarProvider'
import MsalAuthentication from './authentication/MsalAuthentication';
import Demo from './pages/DemoApplication/Demo';

import Localization from './utils/Localization';

function App() {
  Localization.initialize();
  return (
    <ApplicationTheme>
      <SnackbarProvider>
        <MsalAuthentication>
          <Demo />
        </MsalAuthentication>
      </SnackbarProvider>
    </ApplicationTheme>
  );
}

export default App;
