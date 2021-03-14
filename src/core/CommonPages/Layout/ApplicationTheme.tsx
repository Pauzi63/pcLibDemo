import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import useThemes from "../../styles/krmTheme";

import { UserLayoutSettings } from "../../context/UserLayoutSettings";

import useDarkMode from "../../utils/useDarkMode";
import useLanguage from "../../utils/useLanguage";

const ApplicationTheme = (props: { children: any }) => {
  const { children } = props;
  const theme = useThemes();

  const { darkMode, setDarkMode } = useDarkMode();
  const { language, setLanguage } = useLanguage();

  return (
    <UserLayoutSettings.Provider
      value={{ darkMode, setDarkMode, language, setLanguage }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UserLayoutSettings.Provider>
  );
};

export default ApplicationTheme;
