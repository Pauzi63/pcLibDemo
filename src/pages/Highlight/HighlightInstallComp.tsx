import React from 'react';
import { useTranslation } from "react-i18next";

import InstallComp from '../Templates/InstallComp';
import HighlightComp from '../Templates/HighlightComp';

const HighlightInstallComp = () => {
  const { t } = useTranslation();

  return (
    <InstallComp>

<HighlightComp title={t('highlight.install.step_1')}>
  yarn add @types/react-syntax-highlighter --dev
</HighlightComp>

<HighlightComp title={t('highlight.install.step_2')}>
{`import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';

import useDarkMode from '../hooks/useDarkMode';

const Highlight = (props: { children: any; }) => {
  const { children } = props;
  const { darkMode } = useDarkMode();

  return (
    <SyntaxHighlighter language="typescript" style={darkMode ? a11yDark : coy}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Highlight;`}
</HighlightComp>

<HighlightComp title={t('highlight.install.step_3')}>
{`import React from 'react';

import DemoComp from '../Templates/DemoComp';
import Highlight from '../../components/Highlight';

const HighlightDemoComp = () => {
  return (
    <DemoComp>
      <Highlight>
        Text
      </Highlight>
    </DemoComp>
  );
};

export default HighlightDemoComp;`}
</HighlightComp>

    </InstallComp>
  );
};

export default HighlightInstallComp;
