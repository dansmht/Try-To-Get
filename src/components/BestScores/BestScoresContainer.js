import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { setScoresArr} from '../../redux/actions/playgroundManagerActions'
import BestScores from './BestScores'

const BestScoresContainer = ({ gameState: { scores, loadingScores }, setScoresArr }) => {
  useEffect(() => {
    setScoresArr()
  }, [setScoresArr])

  return <BestScores scores={scores} loading={loadingScores} />
}

const mapStateToProps = state => ({
  gameState: state.gameState,
})

export default connect(mapStateToProps, { setScoresArr })(BestScoresContainer)
