import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import DrawerContent from '../DrawerContent/DrawerContent';
import Content from '../Layout/Content';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    menuButtonDesktop: {
      marginRight: 20,
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    // content: {
    //   flexGrow: 1,
    //   padding: theme.spacing(3),
    //   transition: theme.transitions.create('margin', {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),
    //   marginLeft: -drawerWidth,
    // },
    // contentShift: {
    //   transition: theme.transitions.create('margin', {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    //   marginLeft: 0,
    // },
    grow: {
      flexGrow: 0,
      [theme.breakpoints.up('xs')]: {
        flexGrow: 1,
      },
    },
    lightTooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
    hide: {
      display: 'none',
    },
    // search: {
    //   position: 'relative',
    //   borderRadius: theme.shape.borderRadius,
    //   '&:hover': {
    //     backgroundColor: 'default',
    //   },
    //   marginLeft: 0,
    //   width: 'auto',
    //   [theme.breakpoints.up('sm')]: {
    //     marginLeft: theme.spacing(1),
    //     marginRight: theme.spacing(2),
    //     backgroundColor: '#f0f0f0',
    //   },
    // },
    // searchIcon: {
    //   width: theme.spacing(6),
    //   height: '100%',
    //   position: 'absolute',
    //   pointerEvents: 'none',
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   [theme.breakpoints.up('sm')]: {
    //     width: theme.spacing(9),
    //   },
    // },
    // inputRoot: {
    //   color: 'inherit',
    //   width: '100%',
    // },
    // inputInput: {
    //   paddingTop: theme.spacing(1.5),
    //   paddingRight: 0,
    //   paddingBottom: theme.spacing(1.5),
    //   paddingLeft: theme.spacing(6),
    //   transition: theme.transitions.create('width'),
    //   width: 0,
    //   '&:focus': {
    //     width: 200,
    //     borderRadius: theme.shape.borderRadius,
    //     backgroundColor: '#ffffff',
    //     border: `1px solid ${theme.palette.divider}`,
    //   },
    //   [theme.breakpoints.up('sm')]: {
    //     paddingLeft: theme.spacing(10),
    //     width: 600,
    //     '&:focus': {
    //       width: 600,
    //     },
    //   },
    // },
    bigAvatar: {
      margin: 10,
      width: 80,
      height: 40,
    },
  })
);

interface Props {
  drawerOpen: boolean;
  setDrawerOpen: (drawerOpen: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (mobileOpen: boolean) => void;
  anchorEl: null;
  setAnchorEl: (anchorEl: any) => void;
  children: any;
}

const Sidebar3 = (props: Props) => {
  const {
    drawerOpen,
    setDrawerOpen,
    mobileOpen,
    setMobileOpen,
    anchorEl,
    setAnchorEl,
    children,
  } = props;
  // const [drawerOpen, setDrawerOpen] = React.useState(false);
  // const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    // this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
    setMobileOpen(!mobileOpen);
  };

  const handleMobileDrawerOpen = () => {
    // this.setState({ mobileOpen: true });
    setMobileOpen(true);
  };

  const handleDrawerOpen = () => {
    // this.setState({ drawerOpen: true });
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    // this.setState({ drawerOpen: false });
    setDrawerOpen(false);
  };

  // // const handleChange = (event: any) => {
  // //   this.setState({ auth: event.target.checked });
  // // };

  // // handleClick = (event: any) => {
  // //   this.setState({ auth: true });
  // // };

  const handleMenu = (event: any) => {
    // this.setState({ anchorEl: event.currentTarget });
    setAnchorEl(event.currentTarget);
  };

  // // handleSignOut = () => {
  // //   this.setState({ anchorEl: null, auth: false });
  // // };

  const handleClose = () => {
    // this.setState({ anchorEl: null });
    setAnchorEl(null);
  };

  const classes = useStyles();
  const open = Boolean(anchorEl);

  return (
    <div className={classes.root}>
      {/* <CssBaseline />
      <div className={classes.toolbar} />
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
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
          <Avatar
            alt="Logo"
            src="https://cdn.worldvectorlogo.com/logos/cheetah.svg"
            className={classes.bigAvatar}
          />
          <div className={classes.grow} />
          <Hidden xsDown implementation="css">
            <div>
              <Tooltip
                title="Vantage Inteliica"
                classes={{ tooltip: classes.lightTooltip }}
                placement="bottom"
              >
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="default"
                >
                  <AccountCircle />
                </IconButton>
              </Tooltip>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar> */}
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            // container={this.props.container}
            variant="temporary"
            anchor={'left'} //{theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onOpen={handleMobileDrawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div>
              {/* <div style={{ display: 'flex' }}>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="default"
                  // style={{ margin: theme.spacing(1) }}
                >
                  <AccountCircle style={{ fontSize: 50 }} />
                </IconButton>
                <Typography
                  variant="subtitle1"
                  // style={{ marginTop: theme.spacing(4) }}
                >
                  Vantage Intellica
                </Typography>
              </div> */}
              {/* <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              ></Menu> */}
            </div>
            <DrawerContent />
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="persistent"
            open={!drawerOpen}
          >
            <DrawerContent />
          </Drawer>
        </Hidden>
      </nav>
      <Content children={children} drawerOpen={drawerOpen} />
    </div>
  );
};

export default Sidebar3;
