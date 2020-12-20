import { fchmod } from 'fs';

import React from 'react';
import { Paper } from '@material-ui/core';
import useStyles from '../../styles/useStyles';
import MaterialLayout from '../../components/Layout/MaterialLayout';

const Demo = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MaterialLayout>
        <Paper className={classes.paper}>
          <h1>Juhu</h1>
        </Paper>
      </MaterialLayout>
    </React.Fragment>
  );
};

export default Demo;
