import React from 'react'

interface Props {
  quantityAdults: number,
  quantityKids: number
}

export const TicketQuantity: React.FC<Props> = ({ quantityAdults, quantityKids }) => {
  return (
    <div className='ticket-quantity'>
      <p className='ticket-quantity__title'>Boletos adquiridos</p>
      <div className="ticket-quantity__grid">
        <div className='ticket-quantity__concept'>
          <p className='ticket-quantity__item'>Adultos</p>
          <p className='ticket-quantity__number'>{quantityAdults}</p>
        </div>
        <div className='ticket-quantity__concept'>
          <p className='ticket-quantity__item'>Niños</p>
          <p className='ticket-quantity__number'>{quantityKids}</p>
        </div>
      </div>
      <p className='ticket-quantity__message'>La cantidad irá disminuyendo conforme vayan llegando tus invitados a recepción.</p>
    </div>
  )
}
