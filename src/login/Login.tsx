import React from 'react'
import bolaDisco from '../assets/img/bola-disco-gris.png'
import { useAuth } from '../hooks/useAuth';

export const Login: React.FC = () => {

  const { onLoginUser } = useAuth()

  return (
    <div className='login'>
      <div className="login__container">

        <div className="login__image-box">
          <img src={bolaDisco} alt="Bola disco morada" />
        </div>

        <div className="login__content">
          <h2 className="login__title">Sistemas <br />Computacionales</h2>
          <p className='login__text'>Ingresa a tu invitación colocando tu clave de acceso personal.</p>
        </div>
      
        <form className='login__form'>
          {/* <div className="login__field">
            <label htmlFor="key" className="login__label">Clave</label>
            <div className="login__password">
              <input type="password" className="login__input" />
              <FaRegEye size={20} />
            </div>
          </div> */}
          <button onClick={onLoginUser} className="button button--silver login__button">Ingresar Sin Clave</button>
        </form>
        
        <p className='login__school'>&lt;UPA/&gt;</p>
      </div>
    </div>
  )
}
