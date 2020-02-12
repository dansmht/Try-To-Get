import React from 'react'
import { connect } from 'react-redux'
import { getGameLanguage } from '../../redux/selectors/languageSelectors'
import PlaygroundManagerContainer from '../PlaygroundManager/PlaygroundManagerContainer'
import ThemeColorsContainer from '../ThemeColors/ThemeColorsContainer'
import PlaygroundContainer from '../Playground/PlaygroundContainer'
import Snow from '../Snow/Snow'
import { getSnowInGame } from '../../redux/selectors/settingsSelectors'

const Game = ({ gameLanguage, isSnowInGame }) => (
  <div className='wrapper'>
    <PlaygroundManagerContainer menuTitle={gameLanguage.menu} newGameTitle={gameLanguage.newGame} />
    <ThemeColorsContainer />
    <PlaygroundContainer />
    {isSnowInGame === 'True' && <Snow />}
  </div>
)

const mapStateToProps = state => ({
  gameLanguage: getGameLanguage(state),
  isSnowInGame: getSnowInGame(state),
})

export default connect(mapStateToProps)(Game)
