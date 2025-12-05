import React from 'react'
import { TicketMain } from './TicketMain'
import { TicketQuantity } from './TicketQuantity'
import { TicketExtra } from './TicketExtra'
import { useAuth } from '../hooks/useAuth'
import { useUI } from '../hooks/useUI'
import { QrModal } from '../components/QrModal'

export const Ticket: React.FC = () => {
  const { user } = useAuth()
  const { isModalOpen } = useUI()
  return (
    <>
      <div className='ticket'>
        <div className="ticket__container">
          <div className='ticket__content'>
            <TicketMain 
              userName={user?.name ?? ''}
              qrCode={user?.qrCode ?? ''}
            />
            <TicketQuantity 
              quantityAdults={user?.adultsQuantity ?? 0}
              quantityKids={user?.kidsQuantity ?? 0}
            />
            {/* <TicketTable /> */}
            <TicketExtra 
              keyPass={user?.keyPass ?? ''}
            />
          </div>
        </div>
      </div>
      { isModalOpen && <QrModal /> }
    </>
  )
}
