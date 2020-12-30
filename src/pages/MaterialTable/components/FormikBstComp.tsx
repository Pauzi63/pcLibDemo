import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Box } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import { TextField } from 'formik-material-ui';
import { IBaustelle } from '../../../Interfaces/ResponseInterfaces';
import { useMutation } from 'react-query';

interface Props {
  data: any;
  onSubmitData: (data: any) => void;
}

const FormikBstComp = (props: Props) => {
  const { data, onSubmitData } = props;
  // const { id } = useParams<ParamTypes>();
  // const { data, error, isLoading, isError } = useGetBaustelleById(parseInt(id));
  // let history = useHistory();

  // if (isLoading) {
  //   return <CircularProgress />;
  // }

  // if (error) {
  //   const axiosError = error as AxiosError;
  //   if (error && typeof error == 'object') {
  //     return (
  //       <div>
  //         Es ist ein Fehler aufgetreten: {axiosError.response?.statusText}{' '}
  //       </div>
  //     );
  //   }
  // }

  // async function putBaustelle(payload: any) {
  //   const endpoint = `${process.env.REACT_APP_API_URL2}/baustellen`;
  //   const response = await axios.put(`${endpoint}/${payload.id}`, payload);
  //   return response.data;
  // }

  const onSubmit = async (values: any) => {
    const payload: IBaustelle = {
      id: values.id,
      baustelle: values.baustelle,
      vorname: values.vorname,
      nachname: values.nachname,
      ort: values.ort,
    };
    console.log('payload: ', payload);
    onSubmitData(payload);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          id: data && data.id,
          baustelle: data && data.baustelle,
          vorname: data && data.vorname,
          nachname: data && data.nachname,
          ort: data && data.ort,
        }}
        // onSubmit={(values, { setSubmitting }) => {
        //   setTimeout(() => {
        //     setSubmitting(false);
        //     alert(JSON.stringify(values, null, 2));
        //   }, 500);}}

        //   //putBaustelle(values);
        //   //useMutation((payload: any) => putBaustelle(payload));
        //   //history.goBack();
        //   onSubmitData(values);
        // }}

        // onSubmit={(values, actions) => {
        //   onSubmitData(values).then {
        //   actions.setSubmitting(false);
        //   actions.resetForm({
        //     values: {
        //       // the type of `values` inferred to be Blog
        //       id: 0,
        //       baustelle: '',
        //       vorname: '',
        //       nachname: '',
        //       ort: '',
        //     },
        //     // you can also set the other form states here
        //   });
        // }}};

        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ submitForm, isSubmitting, touched, errors }) => (
          <Form>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                label="Baustelle"
                name="baustelle"
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                label="Vorname"
                name="vorname"
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                label="Nachname"
                name="nachname"
              />
            </Box>
            <Box margin={1}>
              <Field component={TextField} type="text" label="Ort" name="ort" />
            </Box>
            <br />
            <br />
            <Box margin={1}>
              <Button
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Submit
              </Button>
            </Box>
            <br />
            <br />
            {isSubmitting && <LinearProgress />}
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default FormikBstComp;
