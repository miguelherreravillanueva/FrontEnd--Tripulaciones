import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import "./Login.scss"

const Login = () => {

  const [formData, setFormData] = useState({

    email: '',

    password: ''

  })

  const { email, password } = formData

  const dispatch = useDispatch();

  const onChange = (e) => {

    setFormData((prevState) => ({

      ...prevState,

      [e.target.name]: e.target.value,

    }))

  }

  const onSubmit = (e) => {

    e.preventDefault()
    dispatch(login(formData));

  }

  return (

    <div className='login-container'>

      <h2 className='login-h2'>Bievenido a Veins Campanar</h2>

      <span className='sub-login'>Accede o registrate para continuar</span>

      <form className='login-form'>
        <div className='email-box'>
          <label for="email">Correo electrónico</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className='password-box'>
          <span>Example@example.com</span>
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password" />
        </div>
      </form>

      <div className='login-buttons'>

        <button className='access-button'>Acceder</button>

        <button className='createAcc-button'>Crear cuenta</button>

      </div>

    <span className='pass-recover'>¿Olvidaste la contraseña?</span>
    <span className='pass-recovery'>Recupérala aquí</span>

    </div>

  )

}

export default Login