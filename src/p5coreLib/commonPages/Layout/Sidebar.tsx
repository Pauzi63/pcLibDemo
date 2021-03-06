import React from "react";
import Drawer from "@material-ui/core/Drawer";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Hidden from "@material-ui/core/Hidden";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppMenu from "../DrawerContent/AppMenu";
import globals from "../../../p5Lib/globals";

const drawerWidth = globals.drawerWidth;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
  })
);

interface Props {
  drawerOpen: boolean;
  mobileOpen: boolean;
  setMobileOpen: (mobileOpen: boolean) => void;
  anchorEl: null;
}

const Sidebar = (props: Props) => {
  const { drawerOpen, mobileOpen, setMobileOpen, anchorEl } = props;
  console.log("draweropen: ", drawerOpen);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileDrawerOpen = () => {
    setMobileOpen(true);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            variant="temporary"
            anchor={"left"} //{theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onOpen={handleMobileDrawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <AppMenu />
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="persistent"
            open={drawerOpen}
          >
            <div className={classes.toolbar} />
            <AppMenu />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Sidebar;
