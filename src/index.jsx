import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { AuthProviderWrapper } from './context/auth.context'
import router from './router'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <AuthProviderWrapper>
    {' '}
    <RouterProvider router={router} />{' '}
  </AuthProviderWrapper>
)
