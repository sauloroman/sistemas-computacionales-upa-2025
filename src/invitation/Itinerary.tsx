import React from 'react'
import itinerary from '../assets/img/itinerario.png'
import arrow from '../assets/img/arrow-down.png'

interface ItineraryEvent {
    icon: string,
    hour: string,
    event: string
}

const itineraryData: ItineraryEvent[] = [
    { icon: 'bx-temple', hour: '06:00 PM - 07:00 PM', event: 'Misa en templo' },
    { icon: 'bx-ticket-star', hour: '09:00 PM - 10:00 PM', event: 'Recepción de invitados' },
    { icon: 'bx-bowl-noodles', hour: '10:30 PM - 11:00 PM', event: 'Cena' },
    { icon: 'bx-list-square', hour: '11:15 PM', event: 'Pase de lista' },
    { icon: 'bx-microphone-alt-2', hour: '11:20 PM', event: 'Palabras de maestro/tutor' },
    { icon: 'bx-video', hour: '11:25 PM', event: 'Proyección Video Generacional' },
    { icon: 'bx-wine', hour: '11:30 PM', event: 'Brindis Graduados y Familia' },
    { icon: 'bx-headphone', hour: '11:35 PM', event: 'Apertura de pista' },
    { icon: 'bx-happy', hour: '12:00 AM', event: 'Shots en la pista' },
    { icon: 'bx-camera-home', hour: '12:00 AM - 01:30 AM', event: 'Cabina de fotos' },
    { icon: 'bx-music', hour: '02:00 AM', event: 'Música Banda' },
    { icon: 'bx-party', hour: '03:00 AM', event: 'Clausura del evento' },
]

const ItineraryItem: React.FC<ItineraryEvent> = ({ icon, hour, event }) => (
  <li className="itinerary__item">
      <i className={`bxr ${icon} itinerary__icon`}></i>
      <p className="itinerary__hour">{hour}</p>
      <p className="itinerary__concept">{event}</p>
  </li>
)

export const Itinerary: React.FC = () => {
  return (
    <section className='itinerary'>
        <div className="itinerary__container">

            <header className="itinerary__header">
                <img src={itinerary} alt="Itinerario" />
            </header>

            <ul className="itinerary__list">
                {itineraryData.map((item, i) => (
                    <ItineraryItem
                        key={i}
                        icon={item.icon}
                        hour={item.hour}
                        event={item.event}
                    />
                ))}
            </ul>

            <div className="itinerary__arrow">
                <img src={arrow} alt="Arrow" />
            </div>

        </div>
    </section>
  )
}
