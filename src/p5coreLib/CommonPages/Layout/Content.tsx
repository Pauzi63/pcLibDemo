import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import globals from "../../../p5Lib/globals";

const drawerWidth = globals.drawerWidth;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar: theme.mixins.toolbar,
  })
);

interface Props {
  drawerOpen: boolean;
  children: any;
}

const Content = (props: Props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: !props.drawerOpen,
        })}
      >
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </React.Fragment>
  );
};

export default Content;
