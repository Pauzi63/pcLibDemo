import React, { useState } from 'react';
import { CssBaseline, Container, Paper, Toolbar } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Header from './Header';
import Header3 from './Header3';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Sidebar2 from './Sidebar2';
import Sidebar3 from './Sidebar3';

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

    // content: {
    //   flexGrow: 1,
    //   padding: theme.spacing(1),
    //   marginTop: theme.spacing(6),
    //   transition: theme.transitions.create('margin', {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),
    //   zIndex: theme.zIndex.appBar + 1,
    //   marginLeft: -240, //drawerWidth
    // },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: 240,
    },
    // content: {
    //   flexGrow: 1,
    //   padding: theme.spacing(3),
    // },

    contentShift: {
      marginTop: theme.spacing(6),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      zIndex: theme.zIndex.appBar + 1,
      marginLeft: 0,
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

  const [drawerOpen, setDrawerOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Header
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      /> */}
      {/* <Sidebar
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      /> */}
      <Header3
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Sidebar3
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        children={children}
      />

      {/* <Container>
        <main className={classes.content}>{children}</main> */}
      {/* <main
          className={classNames(classes.content, {
            [classes.contentShift]: !drawerOpen,
          })}
        > */}
      {/* <Paper>{children}</Paper> */}
      {/* <Paper className={classes.paper}></Paper> */}
      {/* </main> */}
      {/* </Container>
      <Footer /> */}
    </div>
  );
}
