import React from 'react'
import './Settings.css'
import { connect } from 'react-redux'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'
import ToggleButton from '../ToggleButton/ToggleButton'
import { changeLanguage } from '../../redux/actions/languageActions'
import { changeSnow, changeSnowInGame } from '../../redux/actions/settingsActions'
import { getLanguage, getSettingsLanguage } from '../../redux/selectors/languageSelectors'
import { getSelectValue, getSnow, getSnowInGame } from '../../redux/selectors/settingsSelectors'
import { changeFieldSize } from '../../redux/actions/playgroundManagerActions'

const Settings = ({ language, changeLanguage, settingsLanguage, isSnow, isSnowInGame, changeSnow, changeSnowInGame, changeFieldSize, selectValue }) => {

  const { menu, title, lang, snow, snowInGame, fieldSize } = settingsLanguage

  const handleChange = ({ target: { name, value } }) => {
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
      case 'changeFieldSize':
        changeFieldSize(value.split(' ').map(el => +el))
        break
      default:
        break
    }
  }

  return (
    <div className='settings-wrapper'>
      <BackToMenu title={menu} />
      <section className='settings'>
        <h2>{title}</h2>
        <div>{lang}: <ToggleButton id='language' language handleChange={handleChange}
                                   checked={language !== 'en'} /></div>
        <div>{snow}: <ToggleButton id='snow' handleChange={handleChange}
                                   checked={isSnow !== 'False'} /></div>
        <div>{snowInGame}: <ToggleButton id='snowInGame' handleChange={handleChange}
                                         checked={isSnowInGame !== 'False'} /></div>
        <div>
          {fieldSize}:
          <select name='changeFieldSize' defaultValue={selectValue} onChange={handleChange} className='select'>
            <option value='3 3'>&nbsp;3 x 3</option>
            <option value='5 5'>&nbsp;5 x 5</option>
            <option value='10 10'>10x10</option>
          </select>
        </div>
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
  selectValue: getSelectValue(state),
})

export default connect(mapStateToProps, { changeLanguage, changeSnow, changeSnowInGame, changeFieldSize })(Settings)
