import React from 'react';
import { useTranslation } from "react-i18next";

import InstallComp from '../Templates/InstallComp';
import HighlightComp from '../Templates/HighlightComp';

const GoogleMapsInstallComp = () => {
  const { t } = useTranslation();

  return (
    <InstallComp>

<HighlightComp title={t('googleMaps.install.step_1')}>
  yarn add react-google-maps 
</HighlightComp>

<HighlightComp title={t('googleMaps.install.step_2')}>
{`import React from 'react';
import { compose, withProps } from "recompose";
import { GoogleMap, Marker, withGoogleMap, withScriptjs  } from "react-google-maps";

import DemoComp from '../Templates/DemoComp';
import globals from '../../utils/Globals';

const MyMapComponent = compose(
  withProps({
    googleMapURL: \`https://maps.googleapis.com/maps/api/js?key=\${globals.googleMapsApiKey}&v=3.exp&libraries=geometry,drawing,places\`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
));

const GoogleMapsDemoComp = () => {
  return (
    <DemoComp>
      <MyMapComponent/>
    </DemoComp>
  );
};

export default GoogleMapsDemoComp;`}
</HighlightComp>

    </InstallComp>
  );
};

export default GoogleMapsInstallComp;
