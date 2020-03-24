export const getSnow = state => state.settings.snow

export const getSnowInGame = state => state.settings.snowInGame

export const getSelectValue = state => [state.gameState.cellsPerRow, state.gameState.cellsPerCol].join(' ')
