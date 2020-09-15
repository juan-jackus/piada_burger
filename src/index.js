import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import './IndexCss/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { PiadaProvider } from './PiadaContext';
import App from './App';

const app = (
  // Context Api Provider
  <PiadaProvider>
    {/* Initialize React Router */}
    <BrowserRouter basename='/index.html'>
      <App />
    </BrowserRouter>
  </PiadaProvider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
