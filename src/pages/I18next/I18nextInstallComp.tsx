import React from 'react';
import { useTranslation } from "react-i18next";

import InstallComp from '../Templates/InstallComp';
import HighlightComp from '../Templates/HighlightComp';

const I18nextInstallComp = () => {
  const { t } = useTranslation();

  return (
    <InstallComp>

<HighlightComp title={t('i18next.install.step_1')}>
{`yarn add i18next
yarn add react-i18next`}
</HighlightComp>

<HighlightComp title={t('i18next.install.step_2')}>
{`import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import globals from './Globals';
import DE_AT from './languages/DE-AT';
import EN_UK from './languages/EN-UK';

const languages = ["de", "en"];

class Localization {
  static initialize = () => {
    i18n.use(initReactI18next).init({
      lng: languages.includes(navigator.language) ? navigator.language : globals.languageDefault,
      resources: {
        de: { translation: DE_AT },
        en: { translation: EN_UK }
      },
      interpolation: {
        escapeValue: false
      }
    });
  }
}

export default Localization;`}
</HighlightComp>

<HighlightComp title={t('i18next.install.step_3')}>
{`import Localization from './utils/Localization';

function App() {
  Localization.initialize();
  ...
}`}
</HighlightComp>

<HighlightComp title={t('i18next.install.step_4')}>
{`import { useState } from 'react';
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

export default useLanguage;`}
</HighlightComp>

<HighlightComp title={t('i18next.install.step_5')}>
{`import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab';
import { useTranslation } from "react-i18next";

import DemoComp from '../Templates/DemoComp';

const I18nextDemoComp = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: React.MouseEvent<HTMLElement>, language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <DemoComp>
      <ToggleButtonGroup value={i18n.language} exclusive onChange={changeLanguage} aria-label="text alignment" >
          <ToggleButton value="de">{t("languageDE")}</ToggleButton>
          <ToggleButton value="en">{t("languageEN")}</ToggleButton>
        </ToggleButtonGroup>
        <p>
          {t("i18next.demo.text")}<br/>
          {t('i18next.demo.key', {count: 2})}<br/>
          {t('i18next.demo.keyWithCount', {count: 1})}<br/>
          {t('i18next.demo.keyWithCount', {count: 2})}<br/>
          {t('i18next.demo.interpolation', { what: t('i18next.demo.myName'), how: 'Tobias' })}<br/>
          {t('i18next.demo.interpolation', { what: t('i18next.demo.myFavoriteLanguage'), how: 'React' })}<br/>
          {t('i18next.demo.nesting1')}
        </p>
    </DemoComp>
  );
};

export default I18nextDemoComp;`}
</HighlightComp>

    </InstallComp>
  );
};

export default I18nextInstallComp;
