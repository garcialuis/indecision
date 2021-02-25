import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counterstate from './playground/counter-state';
import VisibleState from './playground/VisibleState'

var template = (
  <React.StrictMode>
    {/* <App /> */}
    <VisibleState />
  </React.StrictMode>
)

// var appRoot = document.getElementById('root')
// ReactDOM.render(template, appRoot);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
