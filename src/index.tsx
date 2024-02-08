import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import "./index.css";
import App from "./App";
import "@radix-ui/themes/styles.css";
import reportWebVitals from "./reportWebVitals";
import { Theme } from "@radix-ui/themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Router>
    <Theme>
      <App />
    </Theme>
  </Router>
);

reportWebVitals();
