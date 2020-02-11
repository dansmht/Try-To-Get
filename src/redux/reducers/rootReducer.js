import { combineReducers } from 'redux'
import { themeReducer } from './themeReducer'
import { playGroundManagerReducer } from './playgroundManagerReducer'
import { languageReducer } from './languageReducer'


export const rootReducer = combineReducers({
  theme: themeReducer,
  gameState: playGroundManagerReducer,
  language: languageReducer,
})
