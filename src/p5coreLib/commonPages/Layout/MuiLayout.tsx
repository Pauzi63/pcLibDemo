import React, { useContext, useState } from "react";
import { CssBaseline } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import useStyles from "../../../p5Lib/styles/useStyles";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Content from "./Content";
import { ApplicationContext } from "../../context/applicationContext";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       display: "flex",
//     },
//   })
// );

export default function MuiLayout(props: { children: any }) {
  const { children } = props;
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl] = React.useState(null);

  const { notificationOpen } = useContext(ApplicationContext);

  let history = useHistory();

  React.useEffect(() => {
    if (notificationOpen === true) {
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
