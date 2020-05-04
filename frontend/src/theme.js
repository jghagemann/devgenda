import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      dark: "#000000",
      main: "#212121",
      light: "#484848",
    },
    secondary: {
      dark: "#AEAEAE",
      main: "#E0E0E0",
      light: "#FFFFFF",
    }
  },
  typography: {
    fontFamily: [
      "Roboto",
      "Helvetica Neue",
      "sans-serif"
    ].join(","),
    h1: {
      fontSize: 37
    },
    h2: {
      fontSize: 32
    },
    h3: {
      fontSize: 28
    },
    h4: {
      fontSize: 24
    },
    body1: {
      fontSize: 16
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": ["Roboto"],
      },
    },
  },
});