import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/navBar/Navbar';
import 'transition-style';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <header>
    <Navbar/>
  </header>
    <App />
  </BrowserRouter>
);
