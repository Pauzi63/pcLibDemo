import React from 'react';
import { CssBaseline, Container, Paper, Toolbar } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      marginTop: theme.spacing(3),
      padding: theme.spacing(3),
      zIndex: theme.zIndex.appBar + 1,
    },
    paper: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(1),
      [theme.breakpoints.up(600 + theme.spacing(1) * 2)]: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(5),
        padding: theme.spacing(1),
      },
    },
  })
);

export default function MuiLayout(props: { children: any }) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Container>
        <Paper className={classes.paper}>
          <main className={classes.content}>{children}</main>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
}
