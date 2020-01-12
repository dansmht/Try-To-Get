// import { CHANGE_THEME, CHANGE_COLOR } from '../actions/themeActions'

const initialState = {
    timer: 60,
    score: 0,
}

export const playGroundManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state,
            }
        }
        case 'CHANGE_COLOR':
            return {
                ...state,
                color: action.color,
            }
        default:
            return state
    }
}
