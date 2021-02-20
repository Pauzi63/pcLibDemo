import React, { useEffect } from 'react';
import { Button, CircularProgress, Snackbar } from '@material-ui/core';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { postBaustelle } from '../../api/useBaustelle';
import { IBaustelle } from '../../interfaces/ResponseInterfaces';
import { BaustelleMutateComp } from './components';

interface Props {}

const BaustelleAddPage = (props: Props) => {
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const {
    mutateAsync: mutateAsyncPost,
    error,
    isError,
    isLoading,
  } = useMutation(postBaustelle, {
    onSuccess: (data, variables, context) => {
      enqueueSnackbar(`Datensatz ${data.id} gespeichert!`, {
        variant: 'success',
      });
      history.push('/baustelle');
    },
    onError: (error, variables, context) => {
      const axiosError = error as AxiosError;
      enqueueSnackbar(
        `Folgender Fehler ist aufgetreten! ${axiosError.message} Status: ${axiosError.response?.statusText}  
  `,
        { variant: 'error' }
      );
    },
    onSettled: (data, error, variables, context) => {},
    retry: 0,
  });
  const axiosError = error as AxiosError;

  const intialValues: IBaustelle = {
    id: 0,
    baustelle: '',
    vorname: '',
    nachname: '',
    ort: '',
  };

  async function handleSubmitData(payload: IBaustelle) {
    await mutateAsyncPost(payload);
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
      <Button onClick={() => history.push('/baustelle')}>zur Übersicht</Button>
      <br />
    </React.Fragment>
  );
};

export default BaustelleAddPage;
