import React from 'react';
import { CssBaseline } from '@material-ui/core';

import useStyles from '../../styles/useStyles';

import Header from './Header';
import Footer from './Footer';

const MaterialLayout = (props: { children: any }) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Header />
      <div className={classes.root}>{children}</div>
      <Footer />
    </div>
  );
};

export default MaterialLayout;
