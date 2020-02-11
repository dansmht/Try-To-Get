import React from 'react'
import './Settings.css'
import { connect } from 'react-redux'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'
import ToggleButton from '../ToggleButton/ToggleButton'
import { changeLanguage } from '../../redux/actions/languageActions'
import { getLanguage, getSettingsLanguage } from '../../redux/selectors/languageSelectors'

const Settings = ({ language, changeLanguage, settingsLanguage }) => {

  const { menu, title, lang, snow, snowInGame, fieldSize } = settingsLanguage

  const handleChange = ({ target: { name } }) => {
    switch (name) {
      case 'language':
        changeLanguage()
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
        <div>{snow}: <span>Soon</span></div>
        <div>{snowInGame}: <span>Soon</span></div>
        <div>{fieldSize}: <span>Soon</span></div>
      </section>
      <Snow />
    </div>
  )
}

const mapStateToProps = state => ({
  language: getLanguage(state),
  settingsLanguage: getSettingsLanguage(state),
})

export default connect(mapStateToProps, { changeLanguage })(Settings)
