import { Button } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  useGetBaustelleById,
  usePutBaustelle,
  putBaustelle,
} from '../../hooks/datahooks/useBaustelle';
import { IBaustelle } from '../../Interfaces/ResponseInterfaces';
import FormikBstComp from './components/FormikBstComp';

interface ParamTypes {
  id: string;
}

export default function BaustellenDetailPage() {
  const history = useHistory();
  const { id } = useParams<ParamTypes>();
  const { data: payload, error, isLoading, isError } = useGetBaustelleById(
    parseInt(id)
  );

  async function handleSubmitData(payload: IBaustelle) {
    putBaustelle(payload);
    console.log('Handle onpPauzi ausgelöst! ', payload);
  }

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

  return (
    <div>
      <h1>react-query Detail</h1>
      <FormikBstComp data={payload} onSubmitData={handleSubmitData} />
      <br />
      <br />
      <Button onClick={() => history.goBack()}>zurück</Button>
    </div>
  );
}
