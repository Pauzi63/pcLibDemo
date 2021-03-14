const EN_UK = {
  language: "EN-UK",
  languageDE: "German",
  languageEN: "English",

  templates: {
    demoCompTitle: "Demo",
    installCompTitle: "Installation",
    linksCompTitle: "References"
  },
  i18next: {
    demo: {
      text: "This is a demo text.",
      key: "item",
      key_plural: "items",
      keyWithCount: "{{count}} item",
      keyWithCount_plural: "{{count}} items",
      interpolation: "{{what}} is {{how}}.",
      myName: "My Name",
      myFavoriteLanguage: "My favorite language",
      nesting1: "1, $t(i18next.demo.nesting2)",
      nesting2: "2, $t(i18next.demo.nesting3)",
      nesting3: "3"
    },
    install: {
      step_1: "1. Install library",
      step_2: "2. Create Localization-Provider",
      step_3: "3. Init Localization-Provider",
      step_4: "4. Create Hook",
      step_5: "5. Use i18next"
    }
  },
  snackbar: {
    install: {
      step_1: "1. Install library",
      step_2: "2. Create provider",
      step_3: "3. Use provider",
      step_4: "4. Use snackbar",
    }
  },
  geolocated: {
    install: {
      step_1: "1. Install library",
      step_2: "2. Use react-geolocated",
    }
  },
  googleMaps: {
    install: {
      step_1: "1. Install library",
      step_2: "2. Use Google-Maps",
    }
  },
  highlight: {
    install: {
      step_1: "1. Install library",
      step_2: "2. Config highlight",
      step_3: "3. Use highlight",
    }
  },
  
  // Authentication
  loadingPageText: "The page is loading ...",
  errorPageTitle: "ERROR",
  errorCode: "Code",
  errorMessage: "Message",

  // Header
  title: "Network Statistics",
  changeLanguage: "Change Language",
  switchToLightMode: "Switch to Light Mode",
  switchToDarkMode: "Switch to Dark Mode",

  // Settings
  settings: "Settings",
  startDate: "Start date",
  endDate: "End date",
  maxValuesPerDay: "Maximum/Day",

  // Data
  vpn: "VPN",
  lan: "LAN",
  citrix: "Citrix",
  sum: "Sum",

  // Diagram
  diagramTitle: "Diagram",
  diagramXAxesLabel: "Date",
  diagramYAxesLabel: "Number",
  dateFormat: "MM/DD/YYYY",
  dateTimeFormat: "MM/DD/YYYY HH:mm:ss",
  dateTimeFormat2: "MM/DD/YYYY, HH:mm:ss",

  // Table
  tableTitle: "Table",
  date: "Date",
  dateTime: "Date, Time",

  // MaterialTable
  searchTooltip: "Search",
  searchPlaceholder: "Search",
  exportTitle: "Export",
  exportAriaLabel: "Export",
  exportCSVName: "Export as CSV",
  exportPDFName: "Export as PDF",
  emptyDataSourceMessage: "No records to display",
  labelDisplayedRows: "{from}-{to} of {count}",
  labelRowsSelect: "",
  firstPageTooltip: "First Page",
  previousPageTooltip: "Previous Page",
  nextPageTooltip: "Next Page",
  lastPageTooltip: "Last Page"
};

export default EN_UK;