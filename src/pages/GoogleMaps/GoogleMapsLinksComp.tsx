import React from 'react';
import { Link } from '@material-ui/core'

import LinksComp from '../Templates/LinksComp';

const GoogleMapsLinksComp = () => {
  return (
    <LinksComp>
      <ul>
        <li>
          <Link href="https://material-ui.com/components/GoogleMapss/#notistack">Material-UI: GoogleMaps (notistack)</Link>
        </li>
        <li>
          <Link href="https://www.npmjs.com/package/notistack">npm: notistack</Link>
        </li>
        <li>
          <Link href="https://github.com/iamhosseindhv/notistack">github: notistack (iamhosseindhv)</Link>
        </li>
      </ul>
    </LinksComp>
  );
};

export default GoogleMapsLinksComp;