import React from 'react';
import { useTranslation } from "react-i18next";

import Comp from './Comp';

interface IInstallComp {
  children: any;
}

const InstallComp = (props: IInstallComp) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <Comp title={t('templates.installCompTitle')}>
      {children}
    </Comp>
  );
};

export default InstallComp;