import React from 'react';
import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';

import { BaustelleListComp } from './components';
import { useGetBaustellen } from '../../api/useBaustelle';

const useStyles = makeStyles((theme) => ({
  newButton: {
    position: 'absolute',
  },
}));

interface Props {}

const BaustellePage = (props: Props) => {
  const history = useHistory();
  const classes = useStyles();
  const { data, error, isLoading, isError } = useGetBaustellen();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    const axiosError = error as AxiosError;
    if (error && typeof error == 'object') {
      const errMessage = `Es!! ist ein Fehler aufgetreten: ${axiosError.response?.statusText}
      ${axiosError.message}`;
      return <div>{errMessage}</div>;
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
          className={classes.newButton}
          onClick={() => {
            history.push('/baustelle/add');
          }}
        >
          <AddIcon /> Add new
        </Button>
        <br />
        <br />
        <BaustelleListComp data={data} />
      </React.Fragment>
    )
  );
};

export default BaustellePage;
