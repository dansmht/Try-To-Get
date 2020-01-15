import React from 'react'
import './PlaygroundManager.css'
import Button from '../Button/Button'
import ScoreContainer from './Score/ScoreContainer'
import TimerContainer from './Timer/TimerContainer'

const PlaygroundManager = ({startNewGame}) => {
    return (
        <div className='playground-manager'>
            <Button link title='Menu' path='/' />
            <ScoreContainer />
            <TimerContainer />
            <Button title='New Game' handleClick={startNewGame} />
        </div>
    )
}

export default PlaygroundManager
