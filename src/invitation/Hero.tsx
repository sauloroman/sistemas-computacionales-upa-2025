import React from 'react'
import bolasDisco from '../assets/img/bolas-disco.mp4'
import sistemasComputacionales from '../assets/img/sistemas-computacionales.png'
import graduacion from '../assets/img/graduacion.png'

export const Hero: React.FC = () => {
  return (
    <section id='hero' className='hero'>
      <div className="hero__overlay"></div>
      <video autoPlay loop muted playsInline src={bolasDisco} className='hero__video'></video>
      <div className="hero__title">
        <img className='hero__img' src={graduacion} alt="Sistemas lettering" />
      </div>
      <p className='hero__text'>Ven a celebrar con nosotros</p>
      <div className="hero__career">
        <img className='hero__name' src={sistemasComputacionales} alt="Sistemas" />
      </div>
      <p className='hero__text'>Sábado</p>
      <p className="hero__date">
        <span>DIC</span> 
        <span>13</span> 
        <span>9PM</span> 
      </p>
      <div className="hero__location">
        <p>Salón Hopaliz</p>
        <p>San Marcos #109, 20207</p>
        <p>Aguascalientes, Ags.</p>
      </div>
      <p className='hero__number'>2025</p>
    </section>
  )
}
