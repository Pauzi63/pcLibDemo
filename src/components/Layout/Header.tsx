import React, { useContext } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Switch,
  Tooltip,
} from '@material-ui/core';

import logo from '../../assets/logo.png';
import flagAT from '../../assets/flag-austria-64.png';
import flagUK from '../../assets/flag-united-kingdom-64.png';

import globals from '../../utils/Globals';
// import strings from '../../utils/Localization'
//import useStyles from '../../styles/useStyles';
import { UserLayoutSettings } from '../../context/UserLayoutSettings';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: 'fixed',
      backgroundColor: globals.companyColor,
      zIndex: theme.zIndex.drawer + 1,
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
  })
);

const Header = () => {
  const classes = useStyles();
  const { darkMode, setDarkMode, language, setLanguage } = useContext(
    UserLayoutSettings
  );

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <img src={logo} alt="logo" className={classes.imgLogo} />
        <Typography
          className={classes.title}
          variant="h6"
          color="inherit"
          noWrap
        >
          {'title'}
        </Typography>
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
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
