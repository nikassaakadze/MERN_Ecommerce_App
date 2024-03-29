import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Redux/store'
import { Provider } from 'react-redux'
require('react-dom');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);