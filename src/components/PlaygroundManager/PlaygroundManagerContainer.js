import React from 'react'
import { connect } from 'react-redux'
import { startNewGame } from '../../redux/actions/playgroundManagerActions'
import PlaygroundManager from './PlaygroundManager'

const PlaygroundManagerContainer = ({ startNewGame, menuTitle, newGameTitle }) => (
  <PlaygroundManager startNewGame={startNewGame} menuTitle={menuTitle} newGameTitle={newGameTitle} />
)

export default connect(null, { startNewGame })(PlaygroundManagerContainer)
