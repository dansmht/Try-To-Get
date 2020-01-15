import { changeTheme } from './themeActions'

export const NEW_GAME = 'NEW_GAME'
export const INCREASE_SCORE = 'INCREASE_SCORE'
export const DECREASE_TIME_LEFT = 'DECREASE_TIME_LEFT'
export const GAME_OVER = 'GAME_OVER'

export const newGame = () => ({type: NEW_GAME})
export const increaseScore = () => ({type: INCREASE_SCORE})
export const decreaseTimeLeft = () => ({type: DECREASE_TIME_LEFT})
export const gameOver = () => ({type: GAME_OVER})

export const startNewGame = () => dispatch => {
    dispatch(changeTheme())
    dispatch(newGame())
}
