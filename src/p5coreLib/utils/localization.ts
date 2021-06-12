import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import globals from "../../p5Lib/globals";
import DE_AT from "./languages/DE-AT";
import EN_UK from "./languages/EN-UK";

const languages = ["de", "en"];

class Localization {
  static initialize = () => {
    i18n.use(initReactI18next).init({
      lng: languages.includes(navigator.language)
        ? navigator.language
        : globals.languageDefault,
      resources: {
        de: { translation: DE_AT },
        en: { translation: EN_UK },
      },
      interpolation: {
        escapeValue: false,
      },
    });
  };
}

export default Localization;
