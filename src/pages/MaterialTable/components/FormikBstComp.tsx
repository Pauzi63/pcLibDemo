import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Button, LinearProgress, Box } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import { IBaustelle } from '../../../Interfaces/ResponseInterfaces';

interface Props {
  data: any;
  onSubmitData: (payload: IBaustelle) => void;
}

const FormikBstComp = (props: Props) => {
  const { data, onSubmitData } = props;

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
