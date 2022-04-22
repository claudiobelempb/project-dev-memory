import React from 'react';
import ReactDOM from 'react-dom/client';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/js/src/collapse.js';
import 'bootstrap/js/src/modal.js';
import 'bootstrap/js/src/dropdown.js';
import 'assets/style/custom.scss';
import { Routes } from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Routes />
    <ToastContainer autoClose={3000} />
  </React.StrictMode>,
);
