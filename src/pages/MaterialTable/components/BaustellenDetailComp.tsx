import React from 'react';
import { AxiosError } from 'axios';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import { useGetBaustelleById } from '../../../hooks/api/useBaustelle';
import { Button } from '@material-ui/core';

interface ParamTypes {
  id: string;
}

export default function BaustellenDetailComp() {
  const { id } = useParams<ParamTypes>();
  const { data, error, isLoading, isError } = useGetBaustelleById(parseInt(id));
  let history = useHistory();

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

  return (
    <React.Fragment>
      {data?.id}
      <br />
      {data?.baustelle}
      <br />
      {data?.vorname}
      <br />
      {data?.nachname}
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => history.goBack()}
      >
        zurück
      </Button>
    </React.Fragment>
  );
}
