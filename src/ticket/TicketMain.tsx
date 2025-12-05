import React from 'react'
import hopaliz from '../assets/img/hopaliz-3.png'
import { useUI } from '../hooks/useUI'

interface Props {
    userName: string,
    qrCode: string
}

export const TicketMain: React.FC<Props> = ({ userName, qrCode }) => {
    const { onSetImage, onSetImageVisibility } = useUI()
    
    const onSeeQrCode = () => {
        onSetImage(qrCode)
        onSetImageVisibility(true)
    }

    return (
        <main className='ticket-main'>
            <div className="ticket-main__container">
                <div className="ticket-main__image" style={{ backgroundImage: `url(${hopaliz})`}}>
                    <h4 className='ticket-main__event'>Graduación</h4>
                </div>
                <div className="ticket-main__content">
                    <h2 className='ticket-main__name'>{userName}</h2>
                    <div onClick={onSeeQrCode} className='ticket-main__ticket'>
                        <img src={qrCode} alt="Ticket Imagen" />
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
