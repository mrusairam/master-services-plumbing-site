import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from "./Modal/ModalContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ModalProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ModalProvider>
  </BrowserRouter>
);
