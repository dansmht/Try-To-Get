import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { gameOver, decreaseTimeLeft } from '../../../redux/actions/playgroundManagerActions'
import Timer from './Timer'

const TimerContainer = ({gameState: {timeLeft}, gameOver, decreaseTimeLeft}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            decreaseTimeLeft()
        }, 1000)

        if (timeLeft === 0) {
            clearInterval(timer)
            gameOver()
        }
        return () => {
            clearInterval(timer)
        }
    }, [timeLeft, gameOver, decreaseTimeLeft])

    return (
        <Timer time={timeLeft} />
    )
}

const mapStateToProps = state => ({
    gameState: state.gameState,
})

export default connect(mapStateToProps, {gameOver, decreaseTimeLeft})(TimerContainer)
