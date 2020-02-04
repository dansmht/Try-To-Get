import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setBestScoreAndGameOver, decreaseTimeLeft } from '../../../redux/actions/playgroundManagerActions'
import Timer from './Timer'

const TimerContainer = ({ gameState: { timeLeft }, setBestScoreAndGameOver, decreaseTimeLeft }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      decreaseTimeLeft()
    }, 1000)

    if (timeLeft === 0) {
      clearInterval(timer)
      setBestScoreAndGameOver()
    }
    return () => {
      clearInterval(timer)
    }
  }, [timeLeft, setBestScoreAndGameOver, decreaseTimeLeft])

  return (
    <Timer time={timeLeft} />
  )
}

const mapStateToProps = state => ({
  gameState: state.gameState,
})

export default connect(mapStateToProps, { setBestScoreAndGameOver, decreaseTimeLeft })(TimerContainer)
