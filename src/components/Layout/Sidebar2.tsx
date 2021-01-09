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
  IconButton,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DrawerContent from '../DrawerContent/DrawerContent';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: 'inherit',
    },
    drawerContainer: {
      overflow: 'auto',
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

const Sidebar2 = (props: Props) => {
  const classes = useStyles();
  const { drawerOpen, setDrawerOpen, mobileOpen, setMobileOpen } = props;
  const theme = useTheme();

  // const drawerContent = (
  //   <div className={classes.drawerContainer}>
  //     <MenuList>
  //       <List>
  //         <Link to="/" className={classes.link}>
  //           <ListItem button>
  //             <ListItemIcon>
  //               <HomeIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={'Page1'} />
  //           </ListItem>
  //         </Link>
  //       </List>
  //       <List>
  //         <Link to="/page2" className={classes.link}>
  //           <ListItem button>
  //             <ListItemIcon>
  //               <InfoIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={'Page2'} />
  //           </ListItem>
  //         </Link>
  //       </List>
  //       <List>
  //         <Link to="/page3" className={classes.link}>
  //           <ListItem button>
  //             <ListItemIcon>
  //               <HomeIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={'Page3'} />
  //           </ListItem>
  //         </Link>
  //       </List>
  //       <Divider />
  //       <List>
  //         <Link to="/muitable1" className={classes.link}>
  //           <ListItem button>
  //             <ListItemIcon>
  //               <HomeIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={'Material Table 1'} />
  //           </ListItem>
  //         </Link>
  //       </List>
  //       <List>
  //         <Link to="/bsttable" className={classes.link}>
  //           <ListItem button>
  //             <ListItemIcon>
  //               <HomeIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={'Baustellen'} />
  //           </ListItem>
  //         </Link>
  //       </List>
  //       <Divider />

  //       <Divider />
  //       <List>
  //         <Link to="/formikpage1" className={classes.link}>
  //           <ListItem button>
  //             <ListItemIcon>
  //               <HomeIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={'Formik Page 1'} />
  //           </ListItem>
  //         </Link>
  //       </List>
  //       <Divider />

  //       <List>
  //         <Link to="/page404" className={classes.link}>
  //           <ListItem button>
  //             <ListItemIcon>
  //               <HomeIcon />
  //             </ListItemIcon>
  //             <ListItemText primary={'Error'} />
  //           </ListItem>
  //         </Link>
  //       </List>
  //     </MenuList>
  //   </div>
  // );

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
        {drawerContent}
        <br />
      </Drawer> */}

      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            // onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {/* <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
            >
              <CloseIcon />
            </IconButton> */}
            <DrawerContent />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.drawer}
            open={drawerOpen}
            variant="temporary"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <DrawerContent />
          </Drawer>
        </Hidden>
      </nav>
    </React.Fragment>
  );
};

export default Sidebar2;
