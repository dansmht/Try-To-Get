import { CHANGE_SNOW, CHANGE_SNOW_IN_GAME } from '../actions/settingsActions'

const snow = localStorage.getItem('snow') || 'True'
const snowInGame = localStorage.getItem('snowInGame') || 'False'

const initialState = {
  snow,
  snowInGame,
}

export const settingsReducer = (state = initialState, { type }) => {
  switch (type) {
    case CHANGE_SNOW:
      const snow = state.snow === 'True' ? 'False' : 'True'
      localStorage.setItem('snow', snow)
      return {
        ...state,
        snow,
      }
    case CHANGE_SNOW_IN_GAME:
      const snowInGame = state.snowInGame === 'True' ? 'False' : 'True'
      localStorage.setItem('snow', snowInGame)
      return {
        ...state,
        snowInGame,
      }
    default:
      return state
  }
}
