import React from 'react'
import hopaliz from '../assets/img/hopaliz-3.png'

export const TicketMain: React.FC = () => {
  return (
    <main className='ticket-main'>
        <div className="ticket-main__container">
            <div className="ticket-main__image" style={{ backgroundImage: `url(${hopaliz})`}}>
                <h4 className='ticket-main__event'>Graduación</h4>
            </div>
            <div className="ticket-main__content">
                <h2 className='ticket-main__name'>Saulo Román Santillán Nava</h2>
                <div className='ticket-main__ticket'>
                    <img src="https://res.cloudinary.com/dlamufioy/image/upload/v1735254787/abrasa/tickets/6685adaa71dd4f0b1932875f/dztdgs5z2qm1aou4ikya.png" alt="Ticket Imagen" />
                </div>
                <div className="ticket-main__meta">
                    <p>Ing. Sistemas Computacionales</p>
                    <p>UPA &mdash; 2025</p>
                </div>
            </div>
        </div>
    </main>
  )
}
