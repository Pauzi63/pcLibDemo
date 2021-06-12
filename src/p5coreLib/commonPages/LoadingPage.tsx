import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Grid, CircularProgress, Typography } from '@material-ui/core';

//import strings from '../../utils/Localization';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      minHeight: '100vh',
    },
    progress: {
      color: theme.palette.text.primary,
      margin: 30,
    },
  })
);

const LoadingPage = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.grid}
    >
      <CircularProgress size={50} className={classes.progress} />
      <Typography variant="h5" color="inherit">
        {'loadingPageText'}
      </Typography>
    </Grid>
  );
};

export default LoadingPage;
