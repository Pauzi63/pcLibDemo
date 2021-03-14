import React, { useState } from 'react';
import { CssBaseline, Toolbar } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Content from './Content';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  })
);

export default function MuiLayout(props: { children: any }) {
  const { children } = props;
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <Sidebar
        drawerOpen={drawerOpen}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        anchorEl={anchorEl}
      />
      <Content children={children} drawerOpen={drawerOpen} />
      <Footer />
    </div>
  );
}
