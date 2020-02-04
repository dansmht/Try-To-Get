import React from 'react'
import { connect } from 'react-redux'
import { startNewGame } from '../../redux/actions/playgroundManagerActions'
import PlaygroundManager from './PlaygroundManager'

const PlaygroundManagerContainer = ({ startNewGame }) => <PlaygroundManager startNewGame={startNewGame} />

export default connect(null, { startNewGame })(PlaygroundManagerContainer)
