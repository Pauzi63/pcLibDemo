import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import useThemes from '../../styles/useThemes';

import { UserLayoutSettings } from '../../context/UserLayoutSettings';

import useDarkMode from '../../hooks/useDarkMode';
//import useLanguage from '../../hooks/useLanguage';

const ApplicationTheme = (props: { children: any }) => {
  const { children } = props;
  const theme = useThemes();

  const { darkMode, setDarkMode } = useDarkMode();
  const [language, setLanguage] = useState<string>('de');

  return (
    <UserLayoutSettings.Provider
      value={{ darkMode, setDarkMode, language, setLanguage }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UserLayoutSettings.Provider>
  );
};

export default ApplicationTheme;
