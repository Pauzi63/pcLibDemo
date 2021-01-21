import React from 'react';
import { useTranslation } from "react-i18next";

import Comp from './Comp';

interface ILinksComp {
  children: any;
}

const LinksComp = (props: ILinksComp) => {
  const { children } = props;
  const { t } = useTranslation();

  return (
    <Comp title={t('templates.linksCompTitle')}>
      {children}
    </Comp>
  );
};

export default LinksComp;