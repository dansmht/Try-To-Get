import React from 'react'
import './Settings.css'
import { connect } from 'react-redux'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'
import ToggleButton from '../ToggleButton/ToggleButton'
import { changeLanguage } from '../../redux/actions/languageActions'
import { changeSnow, changeSnowInGame } from '../../redux/actions/settingsActions'
import { getLanguage, getSettingsLanguage } from '../../redux/selectors/languageSelectors'
import { getSnow, getSnowInGame } from '../../redux/selectors/settingsSelectors'

const Settings = ({ language, changeLanguage, settingsLanguage, isSnow, isSnowInGame, changeSnow, changeSnowInGame }) => {

  const { menu, title, lang, snow, snowInGame, fieldSize } = settingsLanguage

  const handleChange = ({ target: { name } }) => {
    switch (name) {
      case 'language':
        changeLanguage()
        break
      case 'snow':
        changeSnow()
        break
      case 'snowInGame':
        changeSnowInGame()
        break
      default:
        break
    }
  }

  return (
    <div className='settings-wrapper'>
      <BackToMenu title={menu} />
      <section className="settings">
        <h2>{title}</h2>
        <div>{lang}: <ToggleButton id='language' language handleChange={handleChange}
                                   checked={language !== 'en'} /></div>
        <div>{snow}: <ToggleButton id='snow' handleChange={handleChange}
                                   checked={isSnow !== 'False'} /></div>
        <div>{snowInGame}: <ToggleButton id='snowInGame' handleChange={handleChange}
                                         checked={isSnowInGame !== 'False'} /></div>
        <div>{fieldSize}: <span>Soon</span></div>
      </section>
      {isSnow === 'True' && <Snow />}
    </div>
  )
}

const mapStateToProps = state => ({
  language: getLanguage(state),
  settingsLanguage: getSettingsLanguage(state),
  isSnow: getSnow(state),
  isSnowInGame: getSnowInGame(state),
})

export default connect(mapStateToProps, { changeLanguage, changeSnow, changeSnowInGame })(Settings)
