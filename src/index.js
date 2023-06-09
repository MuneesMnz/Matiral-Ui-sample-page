import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Theme";
import { ThemeProviders } from "./Context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProviders>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ThemeProviders>
  </React.StrictMode>
);
