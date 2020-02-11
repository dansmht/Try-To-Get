import React from 'react'
import './PlaygroundManager.css'
import Button from '../Button/Button'
import ScoreContainer from './Score/ScoreContainer'
import TimerContainer from './Timer/TimerContainer'

const PlaygroundManager = ({ startNewGame, menuTitle, newGameTitle }) => {
  return (
    <div className='playground-manager'>
      <Button link title={menuTitle} path='/' />
      <ScoreContainer />
      <TimerContainer />
      <Button title={newGameTitle} handleClick={startNewGame} />
    </div>
  )
}

export default PlaygroundManager
