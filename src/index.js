import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-id-swiper/lib/styles/css/swiper.css';
import './index.css';

import AppLayout from './layout';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HashRouter>
    <AppLayout />
  </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
