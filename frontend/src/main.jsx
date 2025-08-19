import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// custom css
import "./style.css";

// linking bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react-router-dom
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
