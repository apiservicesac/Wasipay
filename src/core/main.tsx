import '@/assets/scss/themes.scss';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { Providers } from '@/core/redux/provider'
import App from './App';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter basename={'/web'}>
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
)
