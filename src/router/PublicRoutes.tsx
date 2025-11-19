import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../login/Login'

export const PublicRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Navigate to={'/auth/login'} replace />} />
    </Routes>
  )
}
