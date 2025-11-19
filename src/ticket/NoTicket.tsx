import React from 'react'
import ticket from '../assets/img/ticket.png'
import { Link } from 'react-router-dom'

export const NoTicket: React.FC = () => {
    return (
        <div className='ticket__no-ticket'>
            <img className='ticket__icon' src={ticket} alt="Ticket" />
            <p className="ticket__expr">UPS!</p>
            <p>Tus boletos aún no están disponibles. Regresa pronto para consultar tus pases digitales.</p>
            <Link to={'/'} className="button button--silver">&larr; Regresar</Link>
        </div>
    )
}
