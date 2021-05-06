import React from 'react';
import {Router} from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppRouter from './router'
import NavBar from './components/NavBar'

import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import { Navbar } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
  <AppRouter/>
  {/* <Navbar/> */}
  {/* <Home/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
