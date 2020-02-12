import React from 'react'
import './Menu.css'
import { connect } from 'react-redux'
import { startNewGame } from '../../redux/actions/playgroundManagerActions'
import Button from '../Button/Button'
import Snow from '../Snow/Snow'
import { getMenuLanguage } from '../../redux/selectors/languageSelectors'
import { getSnow } from '../../redux/selectors/settingsSelectors'

const Menu = ({ startNewGame, menuLanguage, isSnow }) => {
  const { startGame, rules, settings, bestScores, about } = menuLanguage

  return (
    <div className='menu'>
      <h1>Try To Get</h1>
      <Button link title={startGame} path='/game' handleClick={startNewGame} />
      <Button link title={rules} path='/rules' />
      <Button link title={settings} path='/settings' />
      <Button link title={bestScores} path='/best' />
      <Button link title={about} path='/about' />
      {isSnow === 'True' && <Snow />}
    </div>
  )
}

const mapStateToProps = state => ({
  menuLanguage: getMenuLanguage(state),
  isSnow: getSnow(state),
})

export default connect(mapStateToProps, { startNewGame })(Menu)
