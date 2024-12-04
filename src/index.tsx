import "06_shared/config/i18n/i18n";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./01_app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "01_app/providers/ThemeProvider";

import { ErrorBoundary } from "01_app/providers/ErrorBoundary";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
