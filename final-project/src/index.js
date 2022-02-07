import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App.route';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
