import React, { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Invitation } from '../invitation/Invitation'
import { Ticket } from '../ticket/Ticket'
import { Music } from '../components/Music'
import { Students } from '../students/Students'
import { MenuAside } from '../components/MenuAside'
import { useUI } from '../hooks/useUI'

export const PrivateRoutes: React.FC = () => {

    const { pathname } = useLocation()
    const { onSetMenuVisibility } = useUI()

    useEffect(() => {
        onSetMenuVisibility(false)
    }, [pathname])

    return (
        <>
            <Music />
            <MenuAside />
            <Routes>
                <Route path='/' element={<Invitation />} />
                <Route path='/ticket' element={<Ticket />} />
                <Route path='/students' element={<Students />} />
                <Route path='*' element={<Navigate to={'/'} replace />} />
            </Routes>
        </>
    )
}
