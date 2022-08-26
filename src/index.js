import React from "react";
import ReactDOM from "react-dom/client";
import "./custom.scss";
import App from "./App";
import ContextApi from "./context/ContextApi";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextApi>
      <Router>
        <App />
      </Router>
    </ContextApi>
  </React.StrictMode>
);
