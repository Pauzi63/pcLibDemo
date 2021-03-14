import { makeStyles } from "@material-ui/core/styles";
import globals from "../../globals";

import KrmTheme from "./krmTheme";

const drawerWidth = globals.drawerWidth;

const createStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1600 + theme.spacing(2) * 2)]: {
      width: 1600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    color: theme.palette.text.primary,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      padding: theme.spacing(3),
    },
  },
  // appBar: {
  //   zIndex: theme.zIndex.drawer + 1,
  // },
  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   width: drawerWidth,
  // },
  // drawerContainer: {
  //   overflow: 'auto',
  // },
  // content: {
  //   flexGrow: 1,
  //   padding: theme.spacing(3),
  // },
  imgLogo: {
    marginRight: 8,
  },
  title: {
    flexGrow: 1,
    color: "#ffffff",
  },
  imgFlag: {
    height: 22,
    width: 42,
    border: "1px solid #ffffff",
    marginRight: 15,
  },
}));

const useStyles = () => {
  const theme = KrmTheme();
  return createStyles(theme);
};

export default useStyles;
