import React from 'react';
import { useTranslation } from "react-i18next";

import Comp from './Comp';

interface IDemoComp {
  children: any;
}

const DemoComp = (props: IDemoComp) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <Comp title={t('templates.demoCompTitle')}>
      {children}
    </Comp>
  );
};

export default DemoComp;