import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconSupport from '@material-ui/icons/ContactSupportOutlined';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import IconError from '@material-ui/icons/Error';

import AppMenuItem from './AppMenuItem';

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Formik',
    link: '/formikpage1',
    Icon: IconPeople,
  },
  {
    name: 'MUI Components',
    Icon: IconShoppingCart,
    items: [
      {
        name: 'Page2',
        link: '/page2',
      },
      {
        name: 'Typography',
        link: '/page3',
      },
      {
        name: 'Cards',
        link: '/page4',
      },

      {
        name: 'Tabs',
        link: '/page5',
      },
    ],
  },
  {
    name: 'CRUD',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Material Table',
        link: '/muitable1',
        Icon: IconShoppingCart,
      },
      {
        name: 'Baustellen',
        link: '/bsttable',
        Icon: IconPeople,
      },
    ],
  },
  {
    name: 'Utils',
    Icon: IconSupport,
    items: [
      {
        name: 'Snackbar',
        link: '/snackbar',
      },
      {
        name: 'Localization',
        link: '/i18next',
      },
      {
        name: 'Highlight',
        link: '/highlight',
      },

      {
        name: 'Google Geo',
        items: [
          {
            name: 'Geolocation',
            link: 'geolocated',
          },
          {
            name: 'Google Maps',
            link: 'googlemaps',
          },
        ],
      },
    ],
  },
  {
    name: 'Error Page',
    link: '/age404',
    Icon: IconError,
  },
];

const AppMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  })
);

export default AppMenu;
