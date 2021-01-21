import React from 'react';
import { Link } from '@material-ui/core'

import LinksComp from '../Templates/LinksComp';

const GeolocatedLinksComp = () => {
  return (
    <LinksComp>
      <ul>
        <li>
          <Link href="https://www.npmjs.com/package/react-geolocated">npm: react-geolocated</Link>
        </li>
      </ul>
    </LinksComp>
  );
};

export default GeolocatedLinksComp;