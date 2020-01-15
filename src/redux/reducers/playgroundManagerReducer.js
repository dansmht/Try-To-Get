import { NEW_GAME, INCREASE_SCORE, DECREASE_TIME_LEFT, GAME_OVER } from '../actions/playgroundManagerActions'

const removeDesiredCell = () => {
    let desiredCell = document.querySelector('.cell .desired-cell')
    if (desiredCell) {
        desiredCell.remove()
        desiredCell = null
    }
}

const removeGameOver = () => {
    let gameOverNode = document.querySelector('.playground .game-over')
    if (gameOverNode) {
        gameOverNode.remove()
        gameOverNode = null
    }
}

const initialState = {
    cellsPerRow: 5,
    cellsPerCol: 5,
    score: 0,
    timeLeft: 4,
}

export const playGroundManagerReducer = (state = initialState, {type}) => {
    switch (type) {
        case NEW_GAME: {
            removeDesiredCell()
            removeGameOver()
            return {
                ...state,
                score: 0,
                timeLeft: 4,
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
            removeDesiredCell()
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
        default:
            return state
    }
}
