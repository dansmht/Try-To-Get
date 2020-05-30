import React, { useState } from 'react'
import './Menu.css'
import { connect } from 'react-redux'
import { logout, setUser, startNewGame } from '../../redux/actions/playgroundManagerActions'
import AuthForm from '../AuthForm/AuthForm'
import Button from '../Button/Button'
import Snow from '../Snow/Snow'
import { getMenuLanguage } from '../../redux/selectors/languageSelectors'
import { getSnow } from '../../redux/selectors/settingsSelectors'
import { getUser } from '../../redux/selectors/gameStateSelectors'

const Menu = ({ user, startNewGame, menuLanguage, isSnow, setUser, logout }) => {
  const { startGame, rules, settings, bestScores, about, authBtnTitle } = menuLanguage

  const [showAuthForm, setShowAuthForm] = useState(false)

  const handleClick = () => {
    user
      ? logout()
      : setShowAuthForm(true)
  }

  return (
    <div className='menu'>
      <h1>Try To Get</h1>
      <Button link title={startGame} path='/game' handleClick={startNewGame} />
      <Button link title={rules} path='/rules' />
      <Button link title={settings} path='/settings' />
      <Button link title={bestScores} path='/best' />
      <Button link title={about} path='/about' />
      <Button title={user ? user : authBtnTitle} handleClick={handleClick} className='userBtn' />
      {isSnow === 'True' && <Snow />}
      {showAuthForm && <AuthForm setShowAuthForm={setShowAuthForm} setUser={setUser} />}
    </div>
  )
}

const mapStateToProps = state => ({
  menuLanguage: getMenuLanguage(state),
  isSnow: getSnow(state),
  user: getUser(state),
})

export default connect(mapStateToProps, { startNewGame, setUser, logout })(Menu)
