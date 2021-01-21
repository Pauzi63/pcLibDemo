import React from 'react';
import { useTranslation } from "react-i18next";

import InstallComp from '../Templates/InstallComp';
import HighlightComp from '../Templates/HighlightComp';

const SnackbarInstallComp = () => {
  const { t } = useTranslation();

  return (
    <InstallComp>

<HighlightComp title={t('snackbar.install.step_1')}>
  yarn add notistack
</HighlightComp>

<HighlightComp title={t('snackbar.install.step_2')}>
{`import { SnackbarProvider as MuiSnackbarProvider } from 'notistack';

const SnackbarProvider = (props: { children: any; }) => {
  const { children } = props;

  return (
    <MuiSnackbarProvider maxSnack={3} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
      {children}
    </MuiSnackbarProvider>
  );
}

export default SnackbarProvider;`}
</HighlightComp>

<HighlightComp title={t('snackbar.install.step_3')}>
{`import SnackbarProvider from './utils/SnackbarProvider'

function App() {
  return (
    <SnackbarProvider>
      ...
    </SnackbarProvider>
  );
}

export default App;`}
</HighlightComp>

<HighlightComp title={t('snackbar.install.step_4')}>
{`import { useSnackbar } from 'notistack';

const SnackbarDemo = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSuccess = () => {
    enqueueSnackbar("Text", { variant: "success"});
  };
  const handleInfo = () => {
    enqueueSnackbar("Text", { variant: "info"});
  };
  const handleWarning = () => {
    enqueueSnackbar("Text", { variant: "warning"});
  };
  const handleError = () => {
    enqueueSnackbar("Text", { variant: "error"});
  };

  ...`}
</HighlightComp>

    </InstallComp>
  );
};

export default SnackbarInstallComp;
