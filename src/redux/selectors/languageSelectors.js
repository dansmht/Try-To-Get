export const getLanguage = state => state.language.language

export const getGameLanguage = state => getLanguage(state) === 'en' ? state.language.gameEn : state.language.gameRu

export const getMenuLanguage = state => getLanguage(state) === 'en' ? state.language.menuEn : state.language.menuRu

export const getSettingsLanguage = state => getLanguage(state) === 'en' ? state.language.settingsEn : state.language.settingsRu

export const getRulesLanguage = state => getLanguage(state) === 'en' ? state.language.rulesEn : state.language.rulesRu

export const getBestScoresLanguage = state => getLanguage(state) === 'en' ? state.language.bestScoresEn : state.language.bestScoresRu

export const getAuthFormLanguage = state => getLanguage(state) === 'en' ? state.language.authFormEn : state.language.authFormRu

export const getAboutLanguage = state => getLanguage(state) === 'en' ? state.language.aboutEn : state.language.aboutRu

export const getPage404Language = state => getLanguage(state) === 'en' ? state.language.page404En : state.language.page404Ru
