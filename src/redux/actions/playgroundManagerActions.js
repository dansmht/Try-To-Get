import { changeTheme } from './themeActions'
import { BestScore } from '../../firebase/score'

export const NEW_GAME = 'NEW_GAME'
export const INCREASE_SCORE = 'INCREASE_SCORE'
export const DECREASE_TIME_LEFT = 'DECREASE_TIME_LEFT'
export const GAME_OVER = 'GAME_OVER'
export const SET_SCORES = 'SET_SCORES'
export const SET_USER = 'SET_USER'
export const LOGOUT = 'LOGOUT'
export const CHANGE_FIELD_SIZES = 'CHANGE_FIELD_SIZES'

export const newGame = () => ({ type: NEW_GAME })
export const increaseScore = () => ({ type: INCREASE_SCORE })
export const decreaseTimeLeft = () => ({ type: DECREASE_TIME_LEFT })
export const gameOver = () => ({ type: GAME_OVER })
export const setScores = scores => ({ type: SET_SCORES, scores })
export const setUser = user => ({ type: SET_USER, user })
export const logout = () => ({ type: LOGOUT })
export const changeFieldSize = sizes => ({type: CHANGE_FIELD_SIZES, sizes})

export const startNewGame = () => dispatch => {
  dispatch(changeTheme())
  dispatch(newGame())
}

export const setBestScoreAndGameOver = () => async (dispatch, getState) => {
  dispatch(gameOver())

  const state = getState().gameState
  if (!state.user) return

  const bestScore = {
    user: state.user,
    score: state.score,
    size: `${state.cellsPerRow}x${state.cellsPerCol}`,
  }
  await BestScore.setBestScore({ ...bestScore })
}

export const setScoresArr = () => async dispatch => {
  const scoresArr = await BestScore.getBestScores()
  scoresArr.sort((a, b) => a.score < b.score ? 1 : -1)
  dispatch(setScores(scoresArr))
}
