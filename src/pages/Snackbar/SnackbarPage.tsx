import React from 'react';

import Page from '../Templates/Page';
import SnackbarDemoComp from './SnackbarDemoComp';
import SnackbarInstallComp from './SnackbarInstallComp';
import SnackbarLinksComp from './SnackbarLinksComp';

const SnackbarPage = () => {
  return (
    <Page title="Snackbar (notistack)">
      <SnackbarDemoComp/>
      <SnackbarInstallComp/>
      <SnackbarLinksComp/>
    </Page>
  );
};

export default SnackbarPage;