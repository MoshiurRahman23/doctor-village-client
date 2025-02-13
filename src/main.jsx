import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'react-day-picker/dist/style.css';
import "react-datepicker/dist/react-datepicker.css";
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <div className=''>
          <RouterProvider router={router} />
          <Toaster />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
