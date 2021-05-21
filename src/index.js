import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import Shici from "./test";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
