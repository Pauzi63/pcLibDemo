import React from 'react';
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

export default I18nextDemoComp;