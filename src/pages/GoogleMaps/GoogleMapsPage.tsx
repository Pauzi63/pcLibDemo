import React from 'react';

import Page from '../Templates/Page';
import GoogleMapsDemoComp from './GoogleMapsDemoComp';
import GoogleMapsInstallComp from './GoogleMapsInstallComp';
import GoogleMapsLinksComp from './GoogleMapsLinksComp';

const GoogleMapsPage = () => {
  return (
    <Page title="Google-Maps (react-google-maps)">
      <GoogleMapsDemoComp/>
      <GoogleMapsInstallComp/>
      <GoogleMapsLinksComp/>
    </Page>
  );
};

export default GoogleMapsPage;