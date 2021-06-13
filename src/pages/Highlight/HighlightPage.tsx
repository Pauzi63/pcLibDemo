import React from 'react';

import Page from '../Templates/Page';
import HighlightDemoComp from './HighlightDemoComp';
import HighlightInstallComp from './HighlightInstallComp';
import HighlightLinksComp from './HighlightLinksComp';

const HighlightPage = () => {
  return (
    <Page title="Highlight (react-syntax-highlighter)">
      <HighlightDemoComp/>
      <HighlightInstallComp/>
      <HighlightLinksComp/>
    </Page>
  );
};

export default HighlightPage;