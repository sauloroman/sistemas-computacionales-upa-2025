import React, { useEffect } from 'react'
import congratulations from '../assets/img/congratulations.png'
import amigos3 from '../assets/img/galeria-3.jpg'
import { useUI } from '../hooks/useUI'
import { ConfettiEffect } from '../components/Confetti'

export const Farewell: React.FC = () => {
    const { onSetImage, onSetImageVisibility, isConfettiVisible, onSetConfetti } = useUI()

    const onSeeImage = () => {
        onSetImage(amigos3)
        onSetImageVisibility(true)
    }

    useEffect(() => {
        if (isConfettiVisible) {
            const timer = setTimeout(() => {
                onSetConfetti(false)
            }, 10000) 

            return () => clearTimeout(timer)
        }
    }, [isConfettiVisible, onSetConfetti])

    return (
        <div className='farewell'>
            <div className="farewell__lettering">
                <img src={congratulations} alt="Mensaje Felicidades" />
            </div>

            <div onClick={onSeeImage} className="farewell__image-box">
                <img src={amigos3} alt="Imagen del grupo" className="farewell__image" />
            </div>

            <div className="farewell__button">
                <button onClick={ () => onSetConfetti(true)} className='button button--silver'>Mágia 🎉</button>
            </div>

            { isConfettiVisible && <ConfettiEffect />}
        </div>
    )
}