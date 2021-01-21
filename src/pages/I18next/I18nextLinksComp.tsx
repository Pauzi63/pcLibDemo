import React from 'react';
import { Link } from '@material-ui/core'

import LinksComp from '../Templates/LinksComp';

const I18nextLinksComp = () => {
  return (
    <LinksComp>
      <ul>
        <li>
          <Link href="https://www.npmjs.com/package/i18next">npm: i18next</Link>
        </li>
        <li>
          <Link href="https://www.npmjs.com/package/react-i18next">npm: react-i18next</Link>
        </li>
        <li>
          <Link href="https://www.i18next.com/">i18next documentation</Link>
        </li>
        <li>
          <Link href="https://www.i18next.com/translation-function/plurals">i18next documentation: Plurals</Link>
        </li>
        <li>
          <Link href="https://www.i18next.com/translation-function/nesting">i18next documentation: Nesting</Link>
        </li>
        <li>
          <Link href="https://en.wikipedia.org/wiki/Internationalization_and_localization">Wikipedia: Internationalization and localization</Link>
        </li>
      </ul>
    </LinksComp>
  );
};

export default I18nextLinksComp;