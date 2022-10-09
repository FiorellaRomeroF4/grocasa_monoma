import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import { store } from './app/store';
import { AppRouter } from './app/Router';

import 'antd/dist/antd.css'
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
);

