import React from 'react';
import { Link } from '@material-ui/core'

import LinksComp from '../Templates/LinksComp';

const HighlightLinksComp = () => {
  return (
    <LinksComp>
      <ul>
        <li>
          <Link href="https://www.npmjs.com/package/react-syntax-highlighter">npm: react-syntax-highlighter</Link>
        </li>
        <li>
          <Link href="https://github.com/react-syntax-highlighter/react-syntax-highlighter">github: react-syntax-highlighter</Link>
        </li>
      </ul>
    </LinksComp>
  );
};

export default HighlightLinksComp;