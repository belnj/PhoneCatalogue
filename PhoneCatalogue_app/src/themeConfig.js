//Main configuration of style to config global styles like primary colors
import { createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
        main: indigo[900],
    },
  },
});

export default theme;