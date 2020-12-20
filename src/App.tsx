import React from 'react';
// import { Localization } from './utils/Localization';
import ApplicationTheme from './components/Layout/ApplicationTheme';
import MsalAuthentication from './authentication/MsalAuthentication';
import Demo from './pages/DemoApplication/Demo';

function App() {
  // Localization.initialize();
  return (
    <ApplicationTheme>
      <MsalAuthentication>
        <Demo />
      </MsalAuthentication>
    </ApplicationTheme>
  );
}

export default App;
