import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

export const Footer: React.FC = () => {
  const whatsappURL = "https://wa.me/524496548073?text=Hola,%20me%20interesa%20una%20invitación%20digital"

  return (
    <footer className="footer">
      <div className="footer__icons">
        
        <a 
          href="https://www.instagram.com/tuamigoinvitaciones/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer__icon"
        >
          <FaInstagram />
        </a>

        <a 
          href={whatsappURL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer__icon"
        >
          <FaWhatsapp />
        </a>

      </div>

      <p className="footer__text">
        ¿Necesitas una invitación como esta?<br />
        <a href={whatsappURL} className="footer__btn">TuAmigoInvitaciones</a>
      </p>
    </footer>
  )
}
