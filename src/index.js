import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import App from "./App";
import Test from "./test";
import Temp from "./temp";
import './styles.css'

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/' : ''}>
//       <Test />
//       {/* <Router history={hashHistory}>
//         <Route path="/" component={App}>
//           <Route path="test" component={Test}/>
//         </Route>
//       </Router> */}
//     </BrowserRouter>
//   </StrictMode>,
//   rootElement
// );

function render(props) {
  const { container } = props;
  ReactDOM.render(
  <StrictMode>
    <BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? '/' : ''}>
      <Test />
      {/* <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="test" component={Test}/>
        </Route>
      </Router> */}
    </BrowserRouter>
  </StrictMode>, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
