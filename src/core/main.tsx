import '@/assets/scss/themes.scss';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { Providers } from '@/core/redux/provider'
import App from './App';
import { ReactQueryProvider } from './react-query';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <Providers>
        <BrowserRouter basename={'/'}>
          <App />
        </BrowserRouter>
      </Providers>
    </ReactQueryProvider>
  </React.StrictMode>,
)
