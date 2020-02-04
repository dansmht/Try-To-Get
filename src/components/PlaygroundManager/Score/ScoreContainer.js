import React from 'react'
import { connect } from 'react-redux'
import Score from './Score'

const ScoreContainer = ({ gameState: { score } }) => <Score score={score} />

const mapStateToProps = state => ({
  gameState: state.gameState,
})

export default connect(mapStateToProps)(ScoreContainer)
