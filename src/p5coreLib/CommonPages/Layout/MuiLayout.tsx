import React, { useContext, useState } from "react";
import { CssBaseline, Toolbar } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Content from "./Content";
import { useHistory } from "react-router-dom";
import { ApplicationContext } from "../../context/ApplicationContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

export default function MuiLayout(props: { children: any }) {
  const { children } = props;
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { setMessageCount, notificationOpen, setNotificationOpen } = useContext(
    ApplicationContext
  );

  let history = useHistory();

  React.useEffect(() => {
    console.log("MuiLayout push");
    if (notificationOpen === true) {
      console.log("MuiLayout gepushed");
      history.push("/notification");
    }
  }, [notificationOpen]);

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
