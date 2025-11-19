import React from 'react'
import { Link } from 'react-router-dom'
import { Gallery } from './Gallery'
import flecha from '../assets/img/arrow-down.png'
import students from '../assets/img/graduados.png'
import birrete from '../assets/img/birrete.png'

export const Students: React.FC = () => {
    return (
        <>
            <div className='students'>
                <div className="students__container">

                    <div className="students__icon">
                        <img src={birrete} alt="Bg Black" />
                    </div>

                    <div className="students__title">
                        <img src={students} alt="Graduados" />
                    </div>

                    <p>Lo que comenzó como un camino individual terminó siendo una meta compartida: todos llegamos, y lo hicimos juntos.</p>

                    <div className="students__button">
                        <Link to={'/students'} className="button button--silver">
                            Ver Graduados
                        </Link>
                    </div>
                    
                    <div className="students__arrow">
                        <img src={flecha} alt="Flecha" />
                    </div>
                </div>
            </div>
            <Gallery />
        </>
    )
}
