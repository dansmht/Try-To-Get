import React from 'react'
import './Rules.css'
import { connect } from 'react-redux'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'
import { getRulesLanguage } from '../../redux/selectors/languageSelectors'
import { getSnow } from '../../redux/selectors/settingsSelectors'

const Rules = ({ rulesLanguage, isSnow }) => {

  const { menu, title, paragraphs } = rulesLanguage

  return (
    <div className='rules-wrapper'>
      <BackToMenu title={menu} />
      <section className='rules'>
        <h2>{title}</h2>
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </section>
      {isSnow === 'True' && <Snow />}
    </div>
  )
}

const mapStateToProps = state => ({
  rulesLanguage: getRulesLanguage(state),
  isSnow: getSnow(state),
})

export default connect(mapStateToProps)(Rules)
