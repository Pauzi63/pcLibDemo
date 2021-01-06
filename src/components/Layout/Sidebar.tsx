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
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
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
  })
);

const Sidebar = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        anchor="left"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <MenuList>
            <List>
              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Page1'} />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to="/page2" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Page2'} />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to="/page3" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Page3'} />
                </ListItem>
              </Link>
            </List>
            <Divider />
            <List>
              <Link to="/muitable1" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Material Table 1'} />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to="/bsttable" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Baustellen'} />
                </ListItem>
              </Link>
            </List>
            <Divider />

            <Divider />
            <List>
              <Link to="/formikpage1" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Formik Page 1'} />
                </ListItem>
              </Link>
            </List>
            <Divider />

            <List>
              <Link to="/page404" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Error'} />
                </ListItem>
              </Link>
            </List>
          </MenuList>
        </div>
        <br />
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
