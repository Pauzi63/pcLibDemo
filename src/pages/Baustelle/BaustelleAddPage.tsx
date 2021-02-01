import React, { useEffect } from 'react';
import { Button, CircularProgress, Snackbar } from '@material-ui/core';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { postBaustelle, usePostBaustelle } from '../../api/useBaustelle';
import { IBaustelle } from '../../Interfaces/ResponseInterfaces';
import { BaustelleMutateComp } from './components';

interface Props {}

const BaustelleAddPage = (props: Props) => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { mutateAsync, error, isError, isLoading } = useMutation(
    postBaustelle,
    {}
  );
  const axiosError = error as AxiosError;

  const intialValues: IBaustelle = {
    id: 0,
    baustelle: '',
    vorname: 'default',
    nachname: '',
    ort: '',
  };

  async function handleSubmitData(payload: IBaustelle) {
    const response = await mutateAsync(payload);
    await enqueueSnackbar('Datensatz gespeichert!', { variant: 'success' });
    // intialValues.id = response.id;
    history.push('/baustelle');
  }

  if (isError) {
    enqueueSnackbar(
      'Es ist folgender Fehler aufgetreten: ' + axiosError?.message,
      { variant: 'error' }
    );
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <React.Fragment>
      <h1>react-query Add new Baustelle</h1>
      <BaustelleMutateComp
        intialValues={intialValues}
        onSubmitData={handleSubmitData}
      />
      <br />
      <br />
      <Button onClick={() => history.goBack()}>zurück</Button>
      <br />
    </React.Fragment>
  );
};

export default BaustelleAddPage;
