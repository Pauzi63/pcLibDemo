import React from 'react';

import Page from '../Templates/Page';
import I18nextDemoComp from './I18nextDemoComp';
import I18nextInstallComp from './I18nextInstallComp';
import I18nextLinksComp from './I18nextLinksComp';

const I18nextPage = () => {
  return (
    <Page title="Localization (i18next)">
      <I18nextDemoComp/>
      <I18nextInstallComp/>
      <I18nextLinksComp/>
    </Page>
  );
};

export default I18nextPage;