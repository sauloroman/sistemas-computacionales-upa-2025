import React from 'react'
import { useUI } from '../hooks/useUI'

export const PhotoModal: React.FC = () => {
  
  const { imageSelected, onSetImage, onSetImageVisibility } = useUI()

  const onCloseModal = () => {
    onSetImage(null)
    onSetImageVisibility(false)
  }

  return (
    <div onClick={onCloseModal} className='modal'>
      <div className="modal__container">
        <header className="modal__header">
          <i onClick={onCloseModal} className='bxr bx-x modal__icon'></i> 
        </header>
        
        <div className="modal__image-box">
          <img className='modal__image' src={imageSelected!} alt="Image Selected" />
        </div>

      </div>
    </div>
  )
}
