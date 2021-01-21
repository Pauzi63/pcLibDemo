import React from 'react';
import {  Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import DemoComp from '../Templates/DemoComp';

const SnackbarDemoComp = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSuccess = () => {
    enqueueSnackbar("This is a sucess text.", { variant: "success"});
  };

  const handleInfo = () => {
    enqueueSnackbar("This is an info text.", { variant: "info"});
  };

  const handleWarning = () => {
    enqueueSnackbar("This is a warning text.", { variant: "warning"});
  };

  const handleError = () => {
    enqueueSnackbar("This is an error text.", { variant: "error"});
  };

  return (
    <DemoComp>
      <Button variant="outlined" onClick={handleSuccess}>Success</Button>
      <Button variant="outlined" onClick={handleInfo}>Info</Button>
      <Button variant="outlined" onClick={handleWarning}>Warning</Button>
      <Button variant="outlined" onClick={handleError}>Error</Button>
    </DemoComp>
  );
};

export default SnackbarDemoComp;
