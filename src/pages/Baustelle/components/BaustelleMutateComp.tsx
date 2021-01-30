import * as React from 'react';
import { Button, LinearProgress, Box } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { IBaustelle } from '../../../Interfaces/ResponseInterfaces';

interface Props {
  intialValues: any;
  onSubmitData: (payload: IBaustelle) => void;
}

const BaustelleMutateComp = (props: Props) => {
  const { intialValues, onSubmitData } = props;

  const onSubmit = async (values: any) => {
    const payload: IBaustelle = {
      id: values.id,
      baustelle: values.baustelle,
      vorname: values.vorname,
      nachname: values.nachname,
      ort: values.ort,
    };
    // data.baustelle = values.baustelle;
    console.log('payload: ', payload);
    await onSubmitData(payload);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          id: intialValues && intialValues.id,
          baustelle: intialValues && intialValues.baustelle,
          vorname: intialValues && intialValues.vorname,
          nachname: intialValues && intialValues.nachname,
          ort: intialValues && intialValues.ort,
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

export default BaustelleMutateComp;
