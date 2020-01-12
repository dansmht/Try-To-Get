import { combineReducers } from 'redux'
import { themeReducer } from './themeReducer'
import { playGroundManagerReducer } from './playgroundManagerReducer'


export const rootReducer = combineReducers({
    theme: themeReducer,
    gameState: playGroundManagerReducer,
})
