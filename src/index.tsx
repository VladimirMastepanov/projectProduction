import { createRoot } from "react-dom/client";
import App from "./01_app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "01_app/providers/ThemeProvider";


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
