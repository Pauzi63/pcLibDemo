import React from 'react';

import Page from '../Templates/Page';
import GeolocatedDemoComp from './GeolocatedDemoComp';
import GeolocatedInstallComp from './GeolocatedInstallComp';
import GeolocatedLinksComp from './GeolocatedLinksComp';

const GeolocatedPage = () => {
  return (
    <Page title="Geolocation (react-geolocated)">
      <GeolocatedDemoComp/>
      <GeolocatedInstallComp/>
      <GeolocatedLinksComp/>
    </Page>
  );
};

export default GeolocatedPage;