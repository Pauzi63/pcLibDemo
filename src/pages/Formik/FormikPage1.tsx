// https://stackworx.github.io/formik-material-ui/
// https://www.youtube.com/watch?v=wAvkbSYdyRU&feature=emb_logo
import * as React from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import MuiTextField from "@material-ui/core/TextField";
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
  Switch,
} from "formik-material-ui";
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  Autocomplete,
  ToggleButtonGroup,
  AutocompleteRenderInputParams,
} from "formik-material-ui-lab";
import Box from "@material-ui/core/Box";
import ToggleButton from "@material-ui/lab/ToggleButton";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import { useGetToDos } from "../../api/useDoTo";
import { useGetBaustellen } from "../../api/useBaustelle";
import { IBaustelle } from "../../interfaces/ResponseInterfaces";
import { AxiosError } from "axios";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];

interface Values {
  email: string;
}

const ranges = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "0-20",
    label: "0 to 20",
  },
  {
    value: "21-50",
    label: "21 to 50",
  },
  {
    value: "51-100",
    label: "51 to 100",
  },
];

function UpperCasingTextField(props: TextFieldProps) {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  const onChange = React.useCallback(
    (event) => {
      const { value } = event.target;
      setFieldValue(name, value ? value.toUpperCase() : "");
    },
    [setFieldValue, name]
  );
  return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
}

const FormikPage1 = () => {
  const { data, error, isLoading, isError } = useGetToDos();
  const {
    data: bstdata,
    error: bsterror,
    isLoading: bstLoading,
    isError: bstIsError,
  } = useGetBaustellen();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    const axiosError = error as AxiosError;
    if (error && typeof error == "object") {
      return (
        <div>
          Es ist ein Fehler aufgetreten: {axiosError.response?.statusText}{" "}
        </div>
      );
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        select: "none",
        baustelle: "",
        tags: [],
        rememberMe: true,
        date: new Date(),
        time: new Date(),
        dateTime: new Date(),
        toggle: [],
        autocomplete: [],
        freeSoloMultiple: [],
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting, touched, errors }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Form>
            <Box margin={1}>
              <Field
                component={UpperCasingTextField}
                name="email"
                type="email"
                label="Email"
                helperText="Please Enter Email"
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="password"
                label="Password"
                name="password"
              />
            </Box>
            <Box margin={1}>
              <FormControlLabel
                control={
                  <Field component={Switch} type="checkbox" name="rememberMe" />
                }
                label="Remember Me"
              />
            </Box>
            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                name="select"
                label="With Select"
                select
                variant="standard"
                helperText="Please select Range"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {ranges.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Field>
            </Box>

            <Box margin={1}>
              <Field
                component={TextField}
                type="text"
                name="baustelle"
                label="Baustellen"
                select
                variant="standard"
                helperText="wähle ein Baustelle aus"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {bstdata &&
                  bstdata.map((bst: IBaustelle) => (
                    <MenuItem key={bst.id} value={bst.id}>
                      {bst.baustelle}
                    </MenuItem>
                  ))}
              </Field>
            </Box>

            <Box margin={1}>
              <FormControl>
                <InputLabel shrink={true} htmlFor="tags">
                  Tags
                </InputLabel>
                <Field
                  component={Select}
                  type="text"
                  name="tags"
                  multiple={true}
                  inputProps={{ name: "tags", id: "tags" }}
                >
                  <MenuItem value="dogs">Dogs</MenuItem>
                  <MenuItem value="cats">Cats</MenuItem>
                  <MenuItem value="rats">Rats</MenuItem>
                  <MenuItem value="snakes">Snakes</MenuItem>
                </Field>
              </FormControl>
            </Box>
            <Box margin={1}>
              <Field component={TimePicker} name="time" label="Time" />
            </Box>
            <Box margin={1}>
              <Field component={DatePicker} name="date" label="Date" />
            </Box>
            <Box margin={1}>
              <Field
                component={DateTimePicker}
                name="dateTime"
                label="Date Time"
              />
            </Box>
            <Box margin={1}>
              <Typography>Toggle button</Typography>
              <Field
                component={ToggleButtonGroup}
                name="toggle"
                type="checkbox"
              >
                <ToggleButton value="left" aria-label="left aligned">
                  <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                  <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                  <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                  <FormatAlignJustifyIcon />
                </ToggleButton>
              </Field>
            </Box>
            <Box margin={1}>
              <Field
                name="autocomplete"
                multiple
                component={Autocomplete}
                options={data && data}
                getOptionLabel={(option: any) => option.title}
                style={{ width: 300 }}
                renderInput={(params: AutocompleteRenderInputParams) => (
                  <MuiTextField
                    {...params}
                    error={touched["autocomplete"] && !!errors["autocomplete"]}
                    helperText={
                      touched["autocomplete"] && errors["autocomplete"]
                    }
                    label="Autocomplete"
                    variant="outlined"
                  />
                )}
              />
            </Box>
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
        </MuiPickersUtilsProvider>
      )}
    </Formik>
  );
};

export default FormikPage1;
