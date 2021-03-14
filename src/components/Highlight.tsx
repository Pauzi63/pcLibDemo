import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, coy } from "react-syntax-highlighter/dist/esm/styles/prism";

import useDarkMode from "../core/utils/useDarkMode";

const Highlight = (props: { children: any }) => {
  const { children } = props;
  const { darkMode } = useDarkMode();

  return (
    <SyntaxHighlighter language="typescript" style={darkMode ? a11yDark : coy}>
      {children}
    </SyntaxHighlighter>
  );
};

export default Highlight;
