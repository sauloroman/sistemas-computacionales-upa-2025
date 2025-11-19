import React from 'react'
import { useEffect, useState } from 'react';
import soloFalta from '../assets/img/solo-falta.png'
import arrow from '../assets/img/arrow-down.png'

const format = (value: number) => value.toString().padStart(2, '0');

const calculateTimeLeft = () => {
  const targetDate = new Date('2025-12-13T21:00:00');

  const now = new Date();
  const totalSeconds = Math.max(0, Math.floor((targetDate.getTime() - now.getTime()) / 1000));

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

export const Timer: React.FC = () => {

    const [timeData, setTimeData] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
        setTimeData(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
        
    return (
        <div className='timer'>
            <header className="timer__header">
                <span>&mdash; La cuenta regresiva &mdash;</span>
                <img src={soloFalta} alt="Solo Falta" />
            </header>

            <div className="timer__grid">
                <div className="timer__box">
                    <p className="timer__number">{format(timeData.days)}</p>
                    <p className="timer__title">Días</p>
                </div>
                <div className="timer__box">
                    <p className="timer__number">{format(timeData.hours)}</p>
                    <p className="timer__title">Hrs</p>
                </div>
                <div className="timer__box">
                    <p className="timer__number">{format(timeData.minutes)}</p>
                    <p className="timer__title">Min</p>
                </div>
                <div className="timer__box">
                    <p className="timer__number">{format(timeData.seconds)}</p>
                    <p className="timer__title">Seg</p>
                </div>
            </div>

            <footer className="timer__arrow">
                <img src={arrow} alt="Solo Falta" />
            </footer>
        </div>
    )
}
