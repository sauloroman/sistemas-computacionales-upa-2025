import React from 'react'

interface Props {
  keyPass: string
}

export const TicketExtra: React.FC<Props> = ({ keyPass }) => {
  return (
    <div className='ticket-extra'>
        <p className='ticket-extra__title'>Información Adicional</p>
        <ul className='ticket-extra__list'>
            <li className='ticket-extra__item'>Salón: <span>Hopáliz</span></li>
            <li className='ticket-extra__item'>Ubicación: <span>Blvd. San Marcos #109, 20207 Aguascalientes, Ags.</span></li>
            <li className='ticket-extra__item'>Folio: <span>{keyPass}</span></li>
        </ul>
        <p className="ticket-extra__message">No compartas este código con nadie que no sea tu invitado</p>
    </div>
  )
}
