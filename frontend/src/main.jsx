import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// custom css
import "./style.css";

// linking bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react-router-dom
import { BrowserRouter } from "react-router-dom";

// import i18n configuration so translations are initialized before the app renders
import "./i18n.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
