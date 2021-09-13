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
      overrides: {
        MuiInputBase: {
          input: {
            "&:-webkit-autofill": {
              transitionDelay: "9999s",
              transitionProperty: "background-color, color",
            },
          },
        },
      },
    })
  );
};

export default KrmTheme;
