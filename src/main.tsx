import '@/assets/scss/themes.scss';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import routerBase from './Router'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routerBase} />
  </React.StrictMode>,
)
