import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import App from "./App";
import theme from "./theme"

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);