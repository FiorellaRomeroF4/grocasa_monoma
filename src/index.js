import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './app/Router';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

