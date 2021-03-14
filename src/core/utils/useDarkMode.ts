import { useState } from "react";

import globals from "../../globals";

const useDarkMode = () => {
  const [, setSate] = useState<boolean>();
  const darkMode = window.localStorage.getItem(globals.darkModeKey) === "true";
  const setDarkMode = (darkMode: boolean) => {
    setSate(darkMode);
    window.localStorage.setItem(globals.darkModeKey, JSON.stringify(darkMode));
  };
  return { darkMode, setDarkMode };
};

export default useDarkMode;
