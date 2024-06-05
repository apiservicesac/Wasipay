import '@/assets/scss/themes.scss';
import 'react-loading-skeleton/dist/skeleton.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { Providers } from '@/core/redux/provider'
import App from './App';
import { ReactQueryProvider } from './react-query';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <ReactQueryProvider>

        <BrowserRouter basename={'/'}>
          <App />
        </BrowserRouter>
      </ReactQueryProvider>
    </Providers>    
  </React.StrictMode>,
)
