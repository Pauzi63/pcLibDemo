import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuList,
  List,
  Divider,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerContainer: {
      overflow: 'auto',
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
    },
  })
);

const DrawerContent = () => {
  const classes = useStyles();

  return (
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
        <List>
          <Link to="/page4" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'Page4'} />
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
  );
};

export default DrawerContent;
