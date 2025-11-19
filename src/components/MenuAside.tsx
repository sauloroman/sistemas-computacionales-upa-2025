import React from 'react'
import { useUI } from '../hooks/useUI'
import { NavLink } from 'react-router-dom'
import { SlEnvolopeLetter } from "react-icons/sl";
import { PiGraduationCap } from "react-icons/pi";
import { IoQrCodeOutline } from "react-icons/io5";
import { SlLogout } from "react-icons/sl";
import { useAuth } from '../hooks/useAuth';

export const MenuAside: React.FC = () => {
    
    const { onLogout } = useAuth()
    const { onSetMenuVisibility, isDrawerOpen } = useUI()
    
    return (
        <aside className='menu'>
            <div onClick={() => onSetMenuVisibility(false)} className={`menu__overlay ${isDrawerOpen ? 'menu__overlay--visible' : 'menu__overlay--hidden'}`}></div>
            <div className={`menu__container ${isDrawerOpen ? 'menu__container--visible' : 'menu__container--hidden'}`}>
                <h2 className='menu__title'>Invitación - Sistemas Computacionales 2025</h2>

                <div className="menu__content">
                    <ul className="menu__list">
                        <NavLink to={'/'} className={({ isActive }) => `menu__item ${isActive && 'menu__item--active'}`}>
                            <SlEnvolopeLetter size={20} />
                            Invitación
                        </NavLink>
                        <NavLink to={'/students'} className={({ isActive }) => `menu__item ${isActive && 'menu__item--active'}`}>
                            <PiGraduationCap size={20} />
                            Graduados
                        </NavLink>
                        <NavLink to={'/ticket'} className={({ isActive }) => `menu__item ${isActive && 'menu__item--active'}`}>
                            <IoQrCodeOutline size={20} />
                            Tus Boletos
                        </NavLink>
                    </ul>

                    <p onClick={onLogout} className='menu__item menu__logout'>
                        <SlLogout size={20} />
                        Cerrar Sesión
                    </p>
                </div>
            </div>
        </aside>
    )
}
