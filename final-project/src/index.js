import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import store from './redux/store';


ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
    <App />

    </Provider>
    </React.Fragment>,
  document.getElementById('root')
);
