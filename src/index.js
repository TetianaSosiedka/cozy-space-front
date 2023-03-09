import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { /*persistor,*/ store } from 'redux/store';
import { theme } from './constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter basename="cozy-space-front">
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
