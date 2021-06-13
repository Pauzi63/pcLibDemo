import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import IconSupport from "@material-ui/icons/ContactSupportOutlined";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";
import IconError from "@material-ui/icons/Error";
import Permissions from "../routes/Permissions";

export const appMenuItems = [
  {
    name: "Dashboard",
    link: "/",
    Icon: IconDashboard,
    permission: null,
  },
  {
    name: "Formik",
    link: "/formikpage1",
    Icon: IconPeople,
    permission: null,
  },
  {
    name: "MUI Components",
    Icon: IconShoppingCart,
    items: [
      {
        name: "viel Text",
        link: "/page2",
        permission: null,
      },
      {
        name: "Typography",
        link: "/page3",
        permission: null,
      },
      {
        name: "Cards",
        link: "/page4",
        permission: null,
      },

      {
        name: "Tabs",
        link: "/page5",
        permission: null,
      },
      {
        name: "MsGraph",
        link: "/msgraph",
        permission: null,
      },

      {
        name: "FilePond",
        link: "/filepond",
        permission: null,
      },
    ],
  },
  {
    name: "CRUD",
    Icon: IconLibraryBooks,
    items: [
      {
        name: "Material Table",
        link: "/muitable1",
        Icon: IconShoppingCart,
        permission: null,
      },
      {
        name: "Baustellen",
        link: "/baustelle",
        Icon: IconPeople,
        permission: Permissions.ReadBaustellen,
      },
    ],
  },
  {
    name: "Utils",
    Icon: IconSupport,
    items: [
      {
        name: "Snackbar",
        link: "/snackbar",
        permission: null,
      },
      {
        name: "Localization",
        link: "/i18next",
        permission: null,
      },
      {
        name: "Highlight",
        link: "/highlight",
        permission: null,
      },

      {
        name: "Google Geo",
        items: [
          {
            name: "Geolocation",
            link: "geolocated",
            permission: null,
          },
          {
            name: "Google Maps",
            link: "googlemaps",
            permission: null,
          },
        ],
      },
    ],
  },
  {
    name: "Error Page",
    link: "/age404",
    Icon: IconError,
    permission: null,
  },
];
