import { useState } from 'react';
import { useTranslation } from "react-i18next";

import globals from '../utils/Globals';

const useLanguage = () => {
  const { i18n } = useTranslation();
  const [, setSate] = useState<string>();
  const language = window.localStorage.getItem(globals.languageKey);
  const setLanguage = (language: string) => {
    window.localStorage.setItem(globals.languageKey, language);
    i18n.changeLanguage(language);
    setSate(language);
  }
  return { language, setLanguage };
}

export default useLanguage;