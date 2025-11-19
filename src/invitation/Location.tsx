import React from 'react'
import ubicaciones from '../assets/img/ubicaciones.png'
import hopaliz3 from '../assets/img/hopaliz-3.png'
import templo from '../assets/img/templo-papa.webp'
import cupAndWine from '../assets/img/cup-and-wine.png'

export const Location: React.FC = () => {
  return (
    <div className='location'>
      <div className="location__container">
        <div className="location__title">
          <span>&mdash; No te pierdas &mdash;</span>
          <img src={ubicaciones} alt="Ubicaciones lettering" />
        </div>

        <div className="location__grid">
          <div className="location__item">          
            <h3 className='location__concept'>Ceremonia Religiosa</h3>
            <img className='location__image' src={templo} alt="Salón Hopáliz" />

            <ul className='location__list'>
              <li className="location__salon">Parroquia de Nuestra Señora de La Anunciación</li>
              <li className='location__place'>
                <p>Ubicación: <span>Calle, Dr. G. Ramírez Valdez 102, 1a Sección, 20235 Aguascalientes, Ags</span></p>
              </li>
              <li className='location__time'>
                <p>06:00 P.M. - 07:00 P.M.</p>
              </li>
            </ul>

            <a 
              target='_blank'
              referrerPolicy='no-referrer'
              href='https://maps.app.goo.gl/sASC8MxCwKLfHTTP6' 
              className='button button--silver'
            >Ver Ubicación</a>
          </div>

          <div className="location__icon">
            <img src={cupAndWine} alt="Cup and wine" />
          </div>

          <div className="location__item">          
            <h3 className='location__concept'>Noche de gala</h3>
            <img className='location__image' src={hopaliz3} alt="Salón Hopáliz" />

            <ul className='location__list'>
              <li className="location__salon">Salón Hopáliz</li>
              <li className='location__place'>
                <p>Ubicación: <span>Blvd. San Marcos #109, 20207 Aguascalientes, Ags.</span></p>
              </li>
              <li className='location__time'>
                <p>08:00 P.M. - 03:00 A.M.</p>
              </li>
            </ul>

            <a 
              target='_blank'
              referrerPolicy='no-referrer'
              href='https://maps.app.goo.gl/hvAmWhfWKYRetZnn9' 
              className='button button--silver'
            >Ver Ubicación</a>
          </div>
        </div>
      </div>
      <div className="location__bottom"></div>
    </div>
  )
}
