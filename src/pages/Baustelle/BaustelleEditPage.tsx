import React, { useEffect } from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

import { useGetBaustelleById, putBaustelle } from '../../api/useBaustelle';
import { IBaustelle } from '../../Interfaces/ResponseInterfaces';
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
  const {
    mutateAsync,
    error: mutateError,
    isError: mutateIsError,
    isLoading: mutateIsLoading,
  } = useMutation(putBaustelle, {});
  // const [openSnackbar, setOpenSnackbar] = React.useState(false);
  // const [fetchError, setFetchError] = React.useState('');
  const axiosError = getError as AxiosError;

  // const handleCloseSnackbar = (
  //   event?: React.SyntheticEvent,
  //   reason?: string
  // ) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setOpenSnackbar(false);
  // };

  async function handleSubmitData(payload: IBaustelle) {
    console.log('Put Mutate ', payload);
    //const response = await mutateAsync(payload);
    const response = await putBaustelle(payload);
    await enqueueSnackbar('Datensatz gespeichert!', { variant: 'success' });
    history.push('/baustelle');
  }

  async function p1(payload: IBaustelle) {
    return new Promise((resolve, reject) => {
      console.log('Put Mutate ', payload);
      const response = mutateAsync(payload);
      if (!mutateIsError) {
        resolve('OK');
      } else {
        reject();
      }
    });
  }

  // useEffect(() => {
  //   setOpenSnackbar(getIsError);
  //   setFetchError(axiosError?.message);
  // }, [getIsError]);

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
      <Button onClick={() => history.goBack()}>zurück</Button>
      {/* <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {fetchError}
        </Alert>
      </Snackbar> */}
    </div>
  );
};

export default BaustelleEditPage;
