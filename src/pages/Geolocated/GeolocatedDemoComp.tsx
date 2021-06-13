import React from 'react';
import { GeolocatedProps, geolocated } from "react-geolocated";

import DemoComp from '../Templates/DemoComp';

interface IGeolocatedProps extends GeolocatedProps { }

const GeolocatedDemoComp = (props: IGeolocatedProps) => {
  return (
    <DemoComp>
      {!props.isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation.</div>
      ) : !props.isGeolocationEnabled ? (
          <div>Geolocation is not enabled.</div>
      ) : props.coords ? (
        <div>
          <table>
              <tbody>
                  <tr>
                      <td>latitude</td>
                      <td>{props.coords.latitude}</td>
                  </tr>
                  <tr>
                      <td>longitude</td>
                      <td>{props.coords.longitude}</td>
                  </tr>
                  <tr>
                      <td>altitude</td>
                      <td>{props.coords.altitude}</td>
                  </tr>
                  <tr>
                      <td>heading</td>
                      <td>{props.coords.heading}</td>
                  </tr>
                  <tr>
                      <td>speed</td>
                      <td>{props.coords.speed}</td>
                  </tr>
              </tbody>
          </table>
      </div>
      ) : (
          <div>Getting the location data&hellip; </div>
      )}
    </DemoComp>
  );
};

export default geolocated()(GeolocatedDemoComp);
