import React from 'react';
import { Button, ButtonGroup, CircularProgress } from '@material-ui/core';
import { AxiosError } from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import BlankPage from '../Common/BlankPage';
import { useGetBaustelleById, deleteBaustelle } from '../../api/useBaustelle';
import { useMutation, useQueryClient } from 'react-query';

interface ParamTypes {
  id: string;
}

interface Props {}

const BaustelleDeletePage = (props: Props) => {
  const { id } = useParams<ParamTypes>();
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { data, error, isLoading, isError } = useGetBaustelleById(parseInt(id));
  const { mutateAsync: mutateAsyncDelete } = useMutation(deleteBaustelle, {
    onSuccess: (data, variables, context) => {
      enqueueSnackbar('Datensatz gelöscht!', { variant: 'success' });
    },
    onError: (error, variables, context) => {
      const axiosError = error as AxiosError;
      enqueueSnackbar(
        `Folgender Fehler ist aufgetreten! ${axiosError.message} Status: ${axiosError.response?.statusText}
    `,
        { variant: 'error' }
      );
    },
    onSettled: (data, error, variables, context) => {
      queryClient.invalidateQueries('GetBaustellen'); // Liste muss neu gelesen werden
    },
    retry: 0,
  });
  let history = useHistory();

  if (!data) {
    return <BlankPage />;
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    const axiosError = error as AxiosError;
    console.log('Axios Error: ', axiosError);
    if (error && typeof error == 'object') {
      return (
        <div>
          Es ist ein Fehler aufgetreten: {axiosError.message}
          <br />
          {axiosError.response?.statusText}{' '}
        </div>
      );
    }
  }

  async function handleDelete(id: number) {
    mutateAsyncDelete(id);
    history.push('/baustelle');
  }

  return (
    data && (
      <React.Fragment>
        {data.id}
        <br />
        {data.baustelle}
        <br />
        {data.vorname}
        <br />
        {data.nachname}
        <br />
        <ButtonGroup>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => history.push('/baustelle')}
          >
            zurück
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              handleDelete(data.id);
            }}
          >
            Löschen
          </Button>
        </ButtonGroup>
      </React.Fragment>
    )
  );
};

export default BaustelleDeletePage;
