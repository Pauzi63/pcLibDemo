import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  List,
  Divider,
  Hidden,
  useTheme,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DrawerContent from '../DrawerContent/DrawerContent';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // drawer: {
    //   [theme.breakpoints.up('sm')]: {
    //     width: drawerWidth,
    //     flexShrink: 0,
    //   },
    // },
    drawerPaper: {
      width: 'inherit',
    },
    drawerContainer: {
      overflow: 'auto',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        backgroundColor: 'red',
        marginTop: theme.spacing(5),
      },
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
    toolbar: theme.mixins.toolbar,
  })
);

interface Props {
  drawerOpen: boolean;
  setDrawerOpen: (drawerOpen: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (mobileOpen: boolean) => void;
}

const Sidebar = (props: Props) => {
  const classes = useStyles();
  const { drawerOpen, setDrawerOpen, mobileOpen } = props;
  const theme = useTheme();

  return (
    <React.Fragment>
      {/* <Drawer
        className={classes.drawer}
        anchor="left"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <DrawerContent />
        <br />
      </Drawer> */}

      {/* <nav className={classes.drawer}> */}
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={drawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <Toolbar />
          <br />
          <br />
          <br />

          {drawerOpen && <h3>Na halo</h3>}
          <DrawerContent />
        </Drawer>
      </Hidden>
      <Hidden smUp implementation="css">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          open={drawerOpen}
          onClose={setDrawerOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <br />
          <br />
          <br />

          {drawerOpen && <h3>Na halo 2</h3>}
          <DrawerContent />
        </Drawer>
      </Hidden>
      {/* </nav> */}
    </React.Fragment>
  );
};

export default Sidebar;
