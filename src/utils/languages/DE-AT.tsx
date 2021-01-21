const DE_AT = {
  language: "DE-AT",
  languageDE: "Deutsch",
  languageEN: "Englisch",
  templates: {
    demoCompTitle: "Demo",
    installCompTitle: "Installation",
    linksCompTitle: "Referenzen"
  },
  i18next: {
    demo: {
      text: "Das ist ein Demo-Text.",
      key: "Element",
      key_plural: "Elemente",
      keyWithCount: "{{count}} Elment",
      keyWithCount_plural: "{{count}} Elemente",
      interpolation: "{{what}} ist {{how}}.",
      myName: "Mein Name",
      myFavoriteLanguage: "Meine Lieblingssprache ist",
      nesting1: "1, $t(i18next.demo.nesting2)",
      nesting2: "2, $t(i18next.demo.nesting3)",
      nesting3: "3"
    },
    install: {
      step_1: "1. Library installieren",
      step_2: "2. Localization-Provider erstellen",
      step_3: "3. Localization-Provider initialisieren",
      step_4: "4. Hook erstellen",
      step_5: "5. i18next verwenden"
    }
  },
  snackbar: {
    install: {
      step_1: "1. Library installieren",
      step_2: "2. Provider erstellen",
      step_3: "3. Provider verwenden",
      step_4: "4. Snackbar verwenden",
    }
  },
  geolocated: {
    install: {
      step_1: "1. Library installieren",
      step_2: "2. react-geolocated verwenden",
    }
  },
  googleMaps: {
    install: {
      step_1: "1. Library installieren",
      step_2: "2. Google-Maps verwenden",
    }
  },
  highlight: {
    install: {
      step_1: "1. Library installieren",
      step_2: "2. Highlight konfigurieren",
      step_3: "3. Highlight verwenden",
    }
  },

  // Authentication
  loadingPageText: "Die Seite wird geladen ...",
  errorPageTitle: "ERROR",
  errorCode: "Fehlercode",
  errorMessage: "Fehlertext",

  // Header
  title: "Netzwerk-Statistik",
  changeLanguage: "Sprache ändern",
  switchToLightMode: "Wechsle zum \"Light Mode\"",
  switchToDarkMode: "Wechsle zum \"Dark Mode\"",

  // Settings
  settings: "Einstellungen",
  startDate: "Startdatum",
  endDate: "Enddatum",
  maxValuesPerDay: "Höchstwerte/Tag",

  // Data
  vpn: "VPN",
  lan: "LAN",
  citrix: "Citrix",
  sum: "Summe",

  // Diagram
  diagramTitle: "Diagramm",
  diagramXAxesLabel: "Datum",
  diagramYAxesLabel: "Anzahl",
  dateFormat: "DD.MM.YYYY",
  dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
  dateTimeFormat2: "DD.MM.YYYY, HH:mm:ss",

  // Table
  tableTitle: "Tabelle",
  date: "Datum",
  dateTime: "Datum, Uhrzeit",

  // MaterialTable
  searchTooltip: "Suchen",
  searchPlaceholder: "Suchen",
  exportTitle: "Exportieren",
  exportAriaLabel: "Exportieren",
  exportCSVName: "Exportieren als CSV",
  exportPDFName: "Exportieren als PDF",
  emptyDataSourceMessage: "Es konnte kein Datensatz gefunden werden.",
  labelDisplayedRows: "{from}-{to} von {count}",
  labelRowsSelect: "",
  firstPageTooltip: "Erste Seite",
  previousPageTooltip: "Vorige Seite",
  nextPageTooltip: "Nächste Seite",
  lastPageTooltip: "Letzte Seite"
};

export default DE_AT;