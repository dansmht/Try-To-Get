import React from 'react'
import { connect } from 'react-redux'
import { getGameLanguage } from '../../redux/selectors/languageSelectors'
import PlaygroundManagerContainer from '../PlaygroundManager/PlaygroundManagerContainer'
import ThemeColorsContainer from '../ThemeColors/ThemeColorsContainer'
import PlaygroundContainer from '../Playground/PlaygroundContainer'

const Game = ({ gameLanguage }) => (
  <div className='wrapper'>
    <PlaygroundManagerContainer menuTitle={gameLanguage.menu} newGameTitle={gameLanguage.newGame} />
    <ThemeColorsContainer />
    <PlaygroundContainer />
  </div>
)

const mapStateToProps = state => ({
  gameLanguage: getGameLanguage(state),
})

export default connect(mapStateToProps)(Game)
