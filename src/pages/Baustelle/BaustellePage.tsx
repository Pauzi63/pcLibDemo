import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';

import { BaustelleListComp } from './components';
import { useGetBaustellen } from '../../api/useBaustelle';

interface Props {}

const BaustellePage = (props: Props) => {
  const history = useHistory();
  const { data, error, isLoading, isError } = useGetBaustellen();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    const axiosError = error as AxiosError;
    if (error && typeof error == 'object') {
      return (
        <div>
          Es ist ein Fehler aufgetreten: {axiosError.response?.statusText}{' '}
          {axiosError.message}
        </div>
      );
    }
  }

  if (!data) {
    return null;
  }

  return (
    data && (
      <React.Fragment>
        <h1>react-query Baustellenliste</h1>
        <Button
          onClick={() => {
            history.push('/baustelle/add');
          }}
        >
          Add new
        </Button>
        <br />
        <br />
        <BaustelleListComp data={data} />
      </React.Fragment>
    )
  );
};

export default BaustellePage;
