import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import amigos1 from '../assets/img/galeria-1.jpg'
import amigos2 from '../assets/img/galeria-2.jpg'
import amigos4 from '../assets/img/galeria-4.jpg'
import { useUI } from '../hooks/useUI'
import { Autoplay } from 'swiper/modules'

const images = [amigos1, amigos2, amigos4]

export const Gallery: React.FC = () => {
    
    const { onSetImage, onSetImageVisibility } = useUI()
  
    const onSeeImage = ( img: string ) => {
        onSetImage(img) 
        onSetImageVisibility(true)
    }

    return (
        <Swiper
            className='swiper'
            loop={true}
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay
        >
            {
                images.map( (img, i) => (
                    <SwiperSlide onClick={() => onSeeImage(img) } className='swiper__slide' key={i * Math.random() * 100}>
                        <img className='swiper__img' src={img} alt='Imagenes amigos' />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
