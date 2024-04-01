import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import { router } from './Routes/Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Auth from './Auth/Auth';
import { HelmetProvider } from 'react-helmet-async';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='overflow-hidden'>
    <React.StrictMode>
    <HelmetProvider>
      <Auth>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Auth>
    </HelmetProvider>
  </React.StrictMode>
  </div>
)
