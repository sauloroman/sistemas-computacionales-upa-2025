import React from 'react'
import papel from '../assets/img/papel.png'
import photo5 from '../assets/img/galeria-5.jpg'
import { useUI } from '../hooks/useUI'

export const Phrase: React.FC = () => {

  const { onSetImage, onSetImageVisibility } = useUI()

  const onSeeImage = () => {
    onSetImage(photo5)
    onSetImageVisibility(true)
  }

  return (
      <div className='phrase'>
        <div className="phrase__container">
          <div className="phrase__top">
              <img src={papel} className='phrase__icon' alt="Papel" />
          </div>
          <p className='phrase__text'>Un capítulo termina, pero los sueños apenas comienzan <br /> ¡Acompáñame a celebrarlo!</p>

          <div onClick={onSeeImage} className="phrase__image-box">
            <img src={photo5} alt="Foto grupal 5" />
          </div>
        </div>
    </div>
  )
}
