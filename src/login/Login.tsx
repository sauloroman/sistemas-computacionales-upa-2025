import React, { useState } from 'react'
import bolaDisco from '../assets/img/bola-disco-gris.png'
import { useAuth } from '../hooks/useAuth';
import { FaRegEye } from 'react-icons/fa';
import { useForm } from 'react-hook-form'
import { useUI } from '../hooks/useUI';
import { Alert } from '../components/Alert';

interface LoginI {
  keyPass: string
}

export const Login: React.FC = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { onLoginUser, isLoading } = useAuth()
  const { alert } = useUI()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LoginI>()

  const loginUser = ( data: LoginI ) => {
    onLoginUser(data.keyPass)
    reset()
  }

  return (
    <>
    
      <div className='login'>
        <div className="login__container">

          <div className="login__image-box">
            <img src={bolaDisco} alt="Bola disco morada" />
          </div>

          <div className="login__content">
            <h2 className="login__title">Sistemas <br />Computacionales</h2>
            <p className='login__text'>Ingresa a tu invitación colocando tu clave de acceso personal.</p>
          </div>

          {
            isLoading
            ? (<div className='loader-container'><span className="loader"></span></div>)
            : (
              <form onSubmit={handleSubmit(loginUser)} className='login__form'>
                <div className="login__field">
                  <label htmlFor="key" className="login__label">Clave</label>
                  <div className="login__password">
                    <input 
                      {
                        ...register('keyPass', {
                          required: {
                            value: true,
                            message: 'La clave es necesaria'
                          }
                        })
                      } 
                      type={showPassword ? 'text' : 'password'}
                      className="login__input" 
                    />
                    <FaRegEye onClick={() => setShowPassword(!showPassword)} size={20} />
                  </div>
                  { errors.keyPass?.message && <span className='login__errorMessage'>{errors.keyPass.message}</span>}
                </div>
                <button type='submit' className="button button--silver login__button">Ingresar</button>
              </form>
            )
          }
          
          <p className='login__school'>&lt;UPA/&gt;</p>
        </div>
      </div>
      { alert.isVisible && <Alert />}
    </>
  )
}
