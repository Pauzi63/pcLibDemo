import { Button, CircularProgress } from '@material-ui/core';
import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { postBaustelle, usePostBaustelle } from '../../hooks/api/useBaustelle';
import { IBaustelle } from '../../Interfaces/ResponseInterfaces';
import FormikBstComp from './components/FormikBstComp';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function BaustellenDetailPageAddNew() {
  const history = useHistory();
  const { mutateAsync, error, isError, isLoading } = useMutation(
    postBaustelle,
    {}
  );
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [fetchError, setFetchError] = React.useState('');
  const axiosError = error as AxiosError;

  const intialValues: IBaustelle = {
    id: 0,
    baustelle: '',
    vorname: '',
    nachname: '',
    ort: '',
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  async function handleSubmitData(payload: IBaustelle) {
    const response = await mutateAsync(payload);
    intialValues.id = response.id;
  }

  useEffect(() => {
    setOpenSnackbar(isError);
    setFetchError(axiosError?.message);
  }, [isError]);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <React.Fragment>
      <h1>react-query Add new Baustelle</h1>
      <FormikBstComp
        intialValues={intialValues}
        onSubmitData={handleSubmitData}
      />
      <br />
      <br />
      <Button onClick={() => history.goBack()}>zurück</Button>
      <br />
      iD: {intialValues.id}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {fetchError}
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
