import React, { useEffect } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { AxiosError } from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useGetBaustelleById, putBaustelle } from '../../api/useBaustelle';
import { IBaustelle } from '../../interfaces/ResponseInterfaces';
import { BaustelleMutateComp } from './components';

interface ParamTypes {
  id: string;
}

interface Props {}

const BaustelleEditPage = (props: Props) => {
  const history = useHistory();
  const { id } = useParams<ParamTypes>();
  const { enqueueSnackbar } = useSnackbar();

  const {
    data: payload,
    error: getError,
    isLoading: getIsLoading,
    isError: getIsError,
  } = useGetBaustelleById(parseInt(id));

  const { mutateAsync, isLoading: mutateIsLoading } = useMutation(
    putBaustelle,
    {
      onSuccess: (data, variables, context) => {
        enqueueSnackbar('Datensatz gespeichert!', { variant: 'success' });
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
    }
  );

  async function handleSubmitData(payload: IBaustelle) {
    await mutateAsync(payload);
  }

  if (getIsLoading || mutateIsLoading) {
    return <CircularProgress />;
  }

  if (getError) {
    const axiosError = getError as AxiosError;
    if (getError && typeof getError == 'object') {
      return (
        <div>
          Es ist ein Fehler aufgetreten: {axiosError.response?.statusText}{' '}
          {axiosError.message}
        </div>
      );
    }
  }

  return (
    <div>
      <h1>react-query Edit</h1>
      <BaustelleMutateComp
        intialValues={payload}
        onSubmitData={handleSubmitData}
      />
      <br />
      <br />
      <Button onClick={() => history.push('/baustelle')}>zur Übersicht</Button>
    </div>
  );
};

export default BaustelleEditPage;
