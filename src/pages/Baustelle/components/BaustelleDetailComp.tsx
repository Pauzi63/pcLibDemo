import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { AxiosError } from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useGetBaustelleById } from '../../../api/useBaustelle';

interface ParamTypes {
  id: string;
}

interface Props {}

const BaustelleDetailComp = (props: Props) => {
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
};

export default BaustelleDetailComp;