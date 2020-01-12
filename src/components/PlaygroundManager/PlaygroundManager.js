import React from 'react'
import './PlaygroundManager.css'
import Score from './Score/Score'
import Timer from './Timer/Timer'
import Button from '../Button/Button'

const PlaygroundManager = () => {
    return (
        <div className='playground-manager'>
            <Button link title='Menu' path='/'/>
            <Score />
            <Timer />
            <Button title='New Game'/>
        </div>
    )
}

export default PlaygroundManager