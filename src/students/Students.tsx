import React, { useEffect } from 'react'
import congratulations from '../assets/img/congratulations.png'
import upa from '../assets/img/logo-UPA.jpg'
import { names } from '../data/students'
import { Link } from 'react-router-dom'

export const Students: React.FC = () => {

    useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <div className='graduates'>
            <div className="graduates__container">

                <header className="graduates__header">
                    <Link to={'/'}>
                        <button className='button button--return'>
                            <i className='bxr bx-arrow-left-stroke'></i> 
                        </button>
                    </Link>
                    <img src={congratulations} alt="Felicidades" />
                </header>

                <ul className="graduates__list">
                    {
                        names.map( name => (
                            <li className='graduates__item'>{name}</li>
                        ))
                    }
                </ul>

                <footer className="graduates__footer">
                    <img className='graduates__logo' src={upa} alt="UPA" />
                </footer>

            </div>
        </div>
    )
}
