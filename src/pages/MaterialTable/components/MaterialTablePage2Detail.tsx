import React, { Component, forwardRef, useContext } from 'react';
import { AxiosError } from 'axios';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useGetToDoById } from '../../../hooks/datahooks/useDoTo';

const apiURL = process.env.REACT_APP_API_URL;

interface ParamTypes {
  id: string;
}

export default function MaterialTablePage2Detail() {
  const { id } = useParams<ParamTypes>();
  const { data, error, isLoading, isError } = useGetToDoById(id);

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
      {data?.title}
    </React.Fragment>
  );
}
