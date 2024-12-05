import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import rouets from './Routes/Routes.jsx'
import AuthProvider from './Routes/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

    <RouterProvider router={rouets}></RouterProvider>
    </AuthProvider>
    
  </StrictMode>,
)
