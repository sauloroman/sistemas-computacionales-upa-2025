import React, { useState, useRef, useEffect } from 'react'
import audio from '../assets/audio/song.mp3'

export const Music: React.FC = () => {

    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (!audioRef.current) return
        
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])

    return (
        <div className='music'>
            <i 
                onClick={() => setIsPlaying(prev => !prev)} 
                className={`bxr bx-${isPlaying ? 'pause' : 'play'} music__icon`}
            ></i>

            <p>{isPlaying ? 'Pausar' : 'Reproducir'} Música</p> 

            <audio ref={audioRef} src={audio} loop />
        </div>
    )
}
