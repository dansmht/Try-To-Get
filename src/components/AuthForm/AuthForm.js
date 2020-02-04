import React, { useState } from 'react'
import './AuthForm.css'
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from '../../firebase/auth'
import Button from '../Button/Button'

const AuthForm = ({ setShowAuthForm, setUser }) => {
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const [state, setState] = useState({
    user: '',
    email: '',
    password: '',
    password2: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { email, password, user } = state

    if (showLoginForm) {
      const username = await loginWithEmailAndPassword(email, password)
      setUser(username)
    } else if (showRegisterForm) {
      const username = await registerWithEmailAndPassword(email, password, user)
      setUser(username)
    }
    setShowAuthForm(false)
  }

  const hideForm = e => {
    if (e.target.className.includes('backdrop')) {
      setShowAuthForm(false)
    }
  }

  return (
    <div className='backdrop' onClick={hideForm}>
      {
        !showLoginForm && !showRegisterForm && (
          <div className='auth-buttons-wrapper'>
            <Button handleClick={() => setShowLoginForm(true)} title='Login' />
            <Button handleClick={() => setShowRegisterForm(true)} title='Register' />
          </div>
        )
      }
      {showLoginForm && <LoginForm handleSubmit={handleSubmit} state={state} handleChange={handleChange} />}
      {showRegisterForm && <RegisterForm handleSubmit={handleSubmit} state={state} handleChange={handleChange} />}
    </div>
  )
}

const LoginForm = ({ handleSubmit, state, handleChange }) => (
  <form className='auth-form' onSubmit={handleSubmit}>
    <h2>Login</h2>
    <label>
      Email
      <input type='email' required name='email' value={state.email} onChange={handleChange} />
    </label>
    <label>
      Password
      <input type='password' required name='password' value={state.password} onChange={handleChange} />
    </label>
    <Button title='Login' />
  </form>
)

const RegisterForm = ({ handleSubmit, state, handleChange }) => (
  <form className='auth-form' onSubmit={handleSubmit}>
    <h2>Register</h2>
    <label>
      Display Name
      <input type='text' required name='user' value={state.user} onChange={handleChange} />
    </label>
    <label>
      Email
      <input type='email' required name='email' value={state.email} onChange={handleChange} />
    </label>
    <label>
      Password
      <input type='password' required name='password' value={state.password} onChange={handleChange} />
    </label>
    <label>
      Repeat Password
      <input type='password' required name='password2' value={state.password2} onChange={handleChange} />
    </label>
    <Button title='Register' />
  </form>
)

export default AuthForm
