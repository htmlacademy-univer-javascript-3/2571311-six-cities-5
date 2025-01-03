
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import React from 'react';
import { offers } from './mocks/offers';
import { Provider } from 'react-redux';
import store from './hooks/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App places={ offers } />
    </Provider>
  </React.StrictMode>
);