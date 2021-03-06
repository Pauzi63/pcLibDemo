import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red, grey } from "@material-ui/core/colors";

// durch UserLayoutSettings Context ersetzen?
import useDarkMode from "../../p5coreLib/utils/useDarkMode";

const KrmTheme = () => {
  const { darkMode } = useDarkMode();
  return responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: darkMode ? "dark" : "light",
        primary: red,
        secondary: grey,
      },
    })
  );
};

export default KrmTheme;
