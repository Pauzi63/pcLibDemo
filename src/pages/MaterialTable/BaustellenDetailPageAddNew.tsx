import { Button } from '@material-ui/core';
import { AxiosError } from 'axios';
import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import {
  postBaustelle,
  usePostBaustelle,
} from '../../hooks/datahooks/useBaustelle';
import { IBaustelle } from '../../Interfaces/ResponseInterfaces';
import FormikBstComp from './components/FormikBstComp';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function BaustellenDetailPageAddNew() {
  const history = useHistory();
  const { mutateAsync, error, isError } = useMutation(postBaustelle, {});
  const [open, setOpen] = React.useState(false);
  const [fetchError, setFetchError] = React.useState('');
  const axiosError = error as AxiosError;
  //const saveit = usePostBaustelle;

  const payload: IBaustelle = {
    id: 0,
    baustelle: '',
    vorname: '',
    nachname: '',
    ort: '',
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  async function handleSubmitData(payload: IBaustelle) {
    // const mutation = useMutation((p) => postBaustelle(payload));
    //const mutation = useMutation(newTodo => axios.post('/todos', newTodo))
    // const data = await mutate(payload);
    //const xy = await postBaustelle(payload);
    try {
      const data = await mutateAsync(payload);
      console.log('mutatedata: ', data);
    } catch (error) {
      console.error('mutateerror: ', error);
    } finally {
      console.log('mutate setteld');
    }
    //console.log('xy: ', xy);
    //postBaustelle(payload);
    console.log('Handle onpPauzi ausgelöst! ', payload);
    console.log('Mutation: ');
  }

  useEffect(() => {
    setOpen(isError);
    setFetchError(axiosError?.message);
  }, [isError]);

  // if (isLoading) {
  //   return <CircularProgress />;
  // }

  // if (isError === true) {
  //   const axiosError = error as AxiosError;
  //   setOpen(true);
  //   setFetchError(axiosError.message);
  //   if (error && typeof error == 'object') {
  //     return (
  //       <div>
  //         Es ist ein Fehler aufgetreten: {axiosError.response?.statusText}{' '}
  //         {axiosError.message}
  //       </div>
  //     );
  //   }
  // }

  // const axiosError = error as AxiosError;
  // if (error) {
  //   setOpen(true);
  // }

  return (
    <div>
      <h1>react-query Add new Baustelle</h1>
      <FormikBstComp data={payload} onSubmitData={handleSubmitData} />
      <br />
      <br />
      <Button onClick={() => history.goBack()}>zurück</Button>
      <br />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {fetchError}
        </Alert>
      </Snackbar>
    </div>
  );
}
