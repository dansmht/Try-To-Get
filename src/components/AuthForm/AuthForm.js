import React, { useState } from 'react'
import './AuthForm.css'
import { connect } from 'react-redux'
import { loginWithEmailAndPassword, registerWithEmailAndPassword } from '../../firebase/auth'
import Button from '../Button/Button'
import { getAuthFormLanguage } from '../../redux/selectors/languageSelectors'

const AuthForm = ({ setShowAuthForm, setUser, authFormLanguage }) => {

  const { login, register, displayName, email, password, repeatPassword } = authFormLanguage

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
            <Button handleClick={() => setShowLoginForm(true)} title={login} />
            <Button handleClick={() => setShowRegisterForm(true)} title={register} />
          </div>
        )
      }
      {showLoginForm && <LoginForm handleSubmit={handleSubmit} state={state} handleChange={handleChange}
                                   title={login} email={email} password={password} />}
      {showRegisterForm && <RegisterForm handleSubmit={handleSubmit} state={state} handleChange={handleChange}
                                         title={register} displayName={displayName}
                                         email={email} password={password} repeatPassword={repeatPassword} />}
    </div>
  )
}

const LoginForm = ({ handleSubmit, state, handleChange, title, email, password }) => (
  <form className='auth-form' onSubmit={handleSubmit}>
    <h2>{title}</h2>
    <label>
      {email}
      <input type='email' required name='email' value={state.email} onChange={handleChange} />
    </label>
    <label>
      {password}
      <input type='password' required name='password' value={state.password} onChange={handleChange} />
    </label>
    <Button title={title} />
  </form>
)

const RegisterForm = ({ handleSubmit, state, handleChange, title, displayName, email, password, repeatPassword }) => (
  <form className='auth-form' onSubmit={handleSubmit}>
    <h2>{title}</h2>
    <label>
      {displayName}
      <input type='text' required name='user' value={state.user} onChange={handleChange} />
    </label>
    <label>
      {email}
      <input type='email' required name='email' value={state.email} onChange={handleChange} />
    </label>
    <label>
      {password}
      <input type='password' required name='password' value={state.password} onChange={handleChange} />
    </label>
    <label>
      {repeatPassword}
      <input type='password' required name='password2' value={state.password2} onChange={handleChange} />
    </label>
    <Button title={title} />
  </form>
)

const mapStateToProps = state => ({
  authFormLanguage: getAuthFormLanguage(state),
})

export default connect(mapStateToProps)(AuthForm)
