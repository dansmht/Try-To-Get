import React from 'react'
import './About.css'
import { connect } from 'react-redux'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'
import { getAboutLanguage } from '../../redux/selectors/languageSelectors'
import { getSnow } from '../../redux/selectors/settingsSelectors'

const About = ({ aboutLanguage, isSnow }) => {

  const { menu, title, paragraphs } = aboutLanguage

  return (
    <div className='about-wrapper'>
      <BackToMenu title={menu} />
      <section className='about'>
        <h2>{title}</h2>
        {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
      </section>
      {isSnow === 'True' && <Snow />}
    </div>
  )
}

const mapStateToProps = state => ({
  aboutLanguage: getAboutLanguage(state),
  isSnow: getSnow(state),
})

export default connect(mapStateToProps)(About)
