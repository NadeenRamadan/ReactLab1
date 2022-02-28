import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Navbar';
import About from './About';
import Footer from './footer';
import Skills from './Skills';
import Portfolio from './Portfolio';
ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
