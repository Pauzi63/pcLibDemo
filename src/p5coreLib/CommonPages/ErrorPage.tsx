import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";

import globals from "../../p5Lib/globals";
//import strings from '../../utils/Localization';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    div: {
      backgroundColor: globals.companyColor,
    },
    grid: {
      minHeight: "100vh",
    },
    container: {
      width: 800,
    },
    errorTitle: {
      margin: 10,
    },
    errorCaption: {
      marginTop: 30,
      fontWeight: "bold",
    },
    errorText: {
      color: "white",
      textAlign: "center",
    },
  })
);

const ErrorPage = (props: { code: string; message: any }) => {
  const { code, message } = props;
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.grid}
      >
        <Container className={classes.container}>
          <Typography
            variant="h1"
            className={`${classes.errorText} ${classes.errorTitle}`}
          >
            {"errorPageTitle"}
          </Typography>
          {code !== "" && (
            <div>
              <Typography
                variant="h5"
                className={`${classes.errorText} ${classes.errorCaption}`}
              >
                {"errorCode"}:
              </Typography>
              <Typography variant="h6" className={classes.errorText}>
                {code}
              </Typography>
            </div>
          )}
          {message !== undefined && (
            <div>
              <Typography
                variant="h5"
                className={`${classes.errorText} ${classes.errorCaption}`}
              >
                {"errorMessage"}:
              </Typography>
              <Typography variant="h6" className={classes.errorText}>
                {message}
              </Typography>
            </div>
          )}
        </Container>
      </Grid>
    </div>
  );
};

export default ErrorPage;
