import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "./index.css";
import App from "./App";
import { BeerProvider } from "./context/BeerContext";

ReactDOM.render(
  <BeerProvider>
    <App />
  </BeerProvider>,
  document.getElementById("root")
);
