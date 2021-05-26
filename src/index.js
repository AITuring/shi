import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import {Router, Route} from 'react-router';

import App from "./App";
import Test from "./test";
import './styles.css'

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Test />
    {/* <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="test" component={Test}/>
      </Route>
    </Router> */}
  </StrictMode>,
  rootElement
);
