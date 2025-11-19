import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'
import { useAuth } from '../hooks/useAuth'
import { AuthStatus } from '../interface/auth.interface'

export const AppRouter: React.FC = () => {

  const { status } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='auth/*' 
          element={
            status === AuthStatus.authenticated 
            ? <Navigate to='/' /> 
            : <PublicRoutes />
          } 
        />
        <Route 
          path='/*' 
          element={
            status === AuthStatus.authenticated
            ? <PrivateRoutes />
            : <Navigate to='/auth/login' /> 
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
