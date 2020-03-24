import {
  NEW_GAME,
  INCREASE_SCORE,
  DECREASE_TIME_LEFT,
  GAME_OVER,
  SET_SCORES,
  LOGOUT,
  SET_USER,
  CHANGE_FIELD_SIZES,
} from '../actions/playgroundManagerActions'

const removeBlockBySelector = selector => {
  let block = document.querySelector(selector)
  if (block) {
    block.remove()
    block = null
  }
}

const initialState = {
  user: null,
  cellsPerRow: 5,
  cellsPerCol: 5,
  score: 0,
  scores: null,
  loadingScores: true,
  timeLeft: 60,
}

export const playGroundManagerReducer = (state = initialState, { type, scores, user, sizes }) => {
  switch (type) {
    case NEW_GAME: {
      removeBlockBySelector('.cell .desired-cell')
      removeBlockBySelector('.playground .game-over')
      return {
        ...state,
        score: 0,
        timeLeft: 60,
      }
    }
    case INCREASE_SCORE:
      return {
        ...state,
        score: state.score + 1,
      }
    case DECREASE_TIME_LEFT:
      return {
        ...state,
        timeLeft: state.timeLeft - 1,
      }
    case GAME_OVER: {
      removeBlockBySelector('.cell .desired-cell')
      const gameOver = `
              <div class="game-over">
                <h2>Game Over</h2>
                <p>Your score is: ${state.score}</p>
              </div>
            `
      document.querySelector('.playground').insertAdjacentHTML('afterbegin', gameOver)
      return {
        ...state,
      }
    }
    case SET_SCORES:
      return {
        ...state,
        scores,
        loadingScores: false,
      }
    case SET_USER:
      return {
        ...state,
        user,
      }
    case LOGOUT:
      return {
        ...state,
        user: null,
      }
    case CHANGE_FIELD_SIZES: {
      const [cellsPerRow, cellsPerCol] = sizes

      return {
        ...state,
        cellsPerRow,
        cellsPerCol,
      }
    }
    default:
      return state
  }
}
