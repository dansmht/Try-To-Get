import { combineReducers } from 'redux'
import { themeReducer } from './themeReducer'
import { playGroundManagerReducer } from './playgroundManagerReducer'
import { languageReducer } from './languageReducer'
import { settingsReducer } from './settingsReducer'


export const rootReducer = combineReducers({
  theme: themeReducer,
  gameState: playGroundManagerReducer,
  language: languageReducer,
  settings: settingsReducer,
})
