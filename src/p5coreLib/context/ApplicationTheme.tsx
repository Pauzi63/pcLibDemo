import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import useThemes from "../../p5Lib/styles/krmTheme";

import { UserLayoutSettings } from "./userLayoutSettings";

import useDarkMode from "../utils/useDarkMode";
import useLanguage from "../utils/useLanguage";
import globals from "../../p5Lib/globals";

const ApplicationTheme = (props: { children: any }) => {
  const { children } = props;
  const theme = useThemes();

  const { darkMode, setDarkMode } = useDarkMode();
  const { language, setLanguage } = useLanguage();

  React.useEffect(() => {
    let language = window.localStorage.getItem(globals.languageKey);
    if (language === null) {
      language = globals.languageDefault;
    }
    setLanguage(language);
  }, []);

  return (
    <UserLayoutSettings.Provider
      value={{ darkMode, setDarkMode, language, setLanguage }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UserLayoutSettings.Provider>
  );
};

export default ApplicationTheme;
