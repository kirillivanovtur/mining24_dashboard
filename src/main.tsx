import React from 'react'
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.tsx'
import './assets/styles/main.scss';

import store from './store';
import i18n from './common/utils/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <App />
        </Router>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
)
