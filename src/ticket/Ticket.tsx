import React from 'react'
// import { TicketMain } from './TicketMain'
import { NoTicket } from './NoTicket'

export const Ticket: React.FC = () => {
  return (
    <div className='ticket'>
      <div className="ticket__container">
        <div className='ticket__content'>
          <NoTicket />
          {/* <TicketMain /> */}

        </div>
      </div>
    </div>
  )
}
