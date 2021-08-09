import { useState } from "react";
import { useTranslation } from "react-i18next";

import globals from "../../p5Lib/globals";

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setState] = useState<string>();
  // let language = window.localStorage.getItem(globals.languageKey);
  // if (language === null) {
  //   language = globals.languageDefault;
  // }
  console.log("useLanguage language: ", language);
  const setLanguage = (language: string) => {
    window.localStorage.setItem(globals.languageKey, language);
    i18n.changeLanguage(language);
    setState(language);
  };
  return { language, setLanguage };
};

export default useLanguage;
