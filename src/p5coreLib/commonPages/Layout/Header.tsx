import React, { useContext } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Badge,
  Toolbar,
  Typography,
  Switch,
  Tooltip,
  IconButton,
  MenuItem,
  Hidden,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useMsal } from "@azure/msal-react";

import classNames from "classnames";

import logo from "../../assets/logo.png";
import flagAT from "../../assets/flag-austria-64.png";
import flagUK from "../../assets/flag-united-kingdom-64.png";

import globals from "../../../p5Lib/globals";
import { UserLayoutSettings } from "../../context/userLayoutSettings";
import { ApplicationContext } from "../../context/applicationContext";
//import { getFullNameFromToken } from "../../utils/useJWT";
// import { useGetAccountInfo } from "../../utils/useGetAccountInfo";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      position: "fixed",
      backgroundColor: globals.companyColor,
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      // [theme.breakpoints.up('sm')]: {
      //   display: 'none',
      // },
    },
    menuButtonDesktop: {
      marginRight: theme.spacing(2),
    },
    imgLogo: {
      marginRight: 8,
      cursor: "pointer",
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
    grow: {
      flexGrow: 0,
      [theme.breakpoints.up("xs")]: {
        flexGrow: 1,
      },
    },
    hide: {
      display: "none",
    },
    bigAvatar: {
      margin: 10,
      width: 80,
      height: 40,
    },
    lightTooltip: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  })
);

interface Props {
  drawerOpen: boolean;
  setDrawerOpen: (drawerOpen: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (mobileOpen: boolean) => void;
}

const Header = (props: Props) => {
  const { drawerOpen, setDrawerOpen, mobileOpen, setMobileOpen } = props;
  const classes = useStyles();
  const history = useHistory();
  const { accounts } = useMsal();
  // const username = accounts[0].username;

  const { darkMode, setDarkMode, language, setLanguage } =
    useContext(UserLayoutSettings);
  const { messageCount, setNotificationOpen } = useContext(ApplicationContext);
  const [currentUserName, setCurrentUserName] = React.useState<string>("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleNotificationOpen = () => {
    console.log("setNotificationOpen(true)");
    setNotificationOpen(true);
  };

  React.useEffect(() => {
    setCurrentUserName((accounts[0].name ?? accounts[0].name) || "");
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          {globals.showMenuIcon && (
            <div>
              <Hidden smUp implementation="css">
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Hidden xsDown implementation="css">
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={handleDrawerOpen}
                  className={classNames(
                    classes.menuButtonDesktop,
                    drawerOpen && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="Close drawer"
                  onClick={handleDrawerClose}
                  className={classNames(
                    classes.menuButtonDesktop,
                    !drawerOpen && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </div>
          )}
          <img
            src={logo}
            alt="logo"
            className={classes.imgLogo}
            onClick={() => history.push("/")}
          />
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            {globals.appDisplayName}
          </Typography>
          <div className={classes.grow} />
          {/* <Hidden xsDown implementation="css">
            <div className={classes.grow} />
          </Hidden> */}
          {globals.showNotificationIcon && (
            <MenuItem>
              <IconButton color="inherit">
                <Badge badgeContent={messageCount} color="secondary">
                  <NotificationsIcon onClick={handleNotificationOpen} />
                </Badge>
              </IconButton>
            </MenuItem>
          )}
          <div hidden className={classes.grow} />
          {globals.showLanguageIcon && (
            <Tooltip title={"changeLanguage"}>
              <div>
                {language === "de" && (
                  <img
                    src={flagAT}
                    alt={"language"}
                    className={classes.imgFlag}
                    onClick={() => setLanguage("en")}
                  />
                )}
                {language === "en" && (
                  <img
                    src={flagUK}
                    alt={"language"}
                    className={classes.imgFlag}
                    onClick={() => setLanguage("de")}
                  />
                )}
              </div>
            </Tooltip>
          )}
          <Tooltip title={darkMode ? "switchToLightMode" : "switchToDarkMode"}>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Tooltip>
          {globals.showAvatar && (
            <Hidden xsDown implementation="css">
              <div>
                <Tooltip
                  title={currentUserName}
                  classes={{ tooltip: classes.lightTooltip }}
                  placement="bottom"
                >
                  <AccountCircle />
                </Tooltip>
              </div>
            </Hidden>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
