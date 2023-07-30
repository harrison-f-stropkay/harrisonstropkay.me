import { createTheme } from "@mui/material/styles";
import { blue, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[300],
    },
    secondary: {
      main: green[500],
    },
  },
});

type Theme = typeof theme;

export default theme;
export { Theme };
