import React, { useContext } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
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
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';

import classNames from 'classnames';

import logo from '../../assets/logo.png';
import flagAT from '../../assets/flag-austria-64.png';
import flagUK from '../../assets/flag-united-kingdom-64.png';

import globals from '../../utils/Globals';
import { UserLayoutSettings } from '../../context/UserLayoutSettings';
import { ApplicationContext } from '../../context/ApplicationContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      position: 'fixed',
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
    },
    title: {
      flexGrow: 1,
      color: '#ffffff',
    },
    imgFlag: {
      height: 22,
      width: 42,
      border: '1px solid #ffffff',
      marginRight: 15,
    },
    grow: {
      flexGrow: 0,
      [theme.breakpoints.up('xs')]: {
        flexGrow: 1,
      },
    },
    hide: {
      display: 'none',
    },
    bigAvatar: {
      margin: 10,
      width: 80,
      height: 40,
    },
    lightTooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
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
  const classes = useStyles();
  const { drawerOpen, setDrawerOpen, mobileOpen, setMobileOpen } = props;
  const { darkMode, setDarkMode, language, setLanguage } = useContext(
    UserLayoutSettings
  );
  const { messageCount } = useContext(ApplicationContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Hidden smUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <AddIcon />
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
          <img src={logo} alt="logo" className={classes.imgLogo} />
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
          <MenuItem>
            <IconButton color="inherit">
              <Badge badgeContent={messageCount} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <div className={classes.grow} />
          <Tooltip title={'changeLanguage'}>
            <div>
              {language === 'de' && (
                <img
                  src={flagAT}
                  alt={'language'}
                  className={classes.imgFlag}
                  onClick={() => setLanguage('en')}
                />
              )}
              {language === 'en' && (
                <img
                  src={flagUK}
                  alt={'language'}
                  className={classes.imgFlag}
                  onClick={() => setLanguage('de')}
                />
              )}
            </div>
          </Tooltip>
          <Tooltip title={darkMode ? 'switchToLightMode' : 'switchToDarkMode'}>
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Tooltip>
          <Hidden xsDown implementation="css">
            <div>
              <Tooltip
                title="Das bin ich"
                classes={{ tooltip: classes.lightTooltip }}
                placement="bottom"
              >
                <AccountCircle />
              </Tooltip>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
