import React from 'react'
import graduado from '../assets/img/graduado.png'
import bola from '../assets/img/bola-disco-gris.png'
import arrow from '../assets/img/arrow-down.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Student: React.FC = () => {

  const { user } = useAuth()

  console.log(user)

  return (
    <div className='student'>
        <div className="student__ball">
          <img src={bola} alt="Bola Morada" />
        </div>
        <div className="student__top">
            <img className='student__img' src={graduado} alt="Graduado Lettering" />
        </div>
        <div className="student__title">
          <span>&mdash; Para tí &mdash;</span>
          <h2 className='heading-section student__name'>{user?.name}</h2>

          <div className="student__button">
            <Link to={'/ticket'} className='button button--silver'>Ver mis boletos</Link>
          </div>
        </div>
        <div className="student__arrow">
          <img src={arrow} alt="Arrow Down" />
        </div>
    </div>
  )
}
