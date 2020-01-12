import React from 'react'
import PlaygroundManagerContainer from '../PlaygroundManager/PlaygroundManagerContainer'
import ThemeColorsContainer from '../ThemeColors/ThemeColorsContainer'
import PlaygroundContainer from '../Playground/PlaygroundContainer'

const Game = () => (
    <div className='wrapper'>
        <PlaygroundManagerContainer />
        <ThemeColorsContainer />
        <PlaygroundContainer />
    </div>
)

export default Game
