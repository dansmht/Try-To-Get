import React from 'react'
import './Page404.css'
import Button from '../Button/Button'
import Snow from '../Snow/Snow'
import { connect } from 'react-redux'
import { getPage404Language } from '../../redux/selectors/languageSelectors'
import { getSnow } from '../../redux/selectors/settingsSelectors'

const Page404 = ({ page404Language, isSnow }) => {

  const { menu, title, description } = page404Language

  return (
    <div className='page-404'>
      <h3>{title}</h3>
      <h2>404</h2>
      <p>{description}</p>
      <Button link title={menu} path='/' />
      {isSnow === 'True' && <Snow />}
    </div>
  )
}

const mapStateToProps = state => ({
  page404Language: getPage404Language(state),
  isSnow: getSnow(state),
})

export default connect(mapStateToProps)(Page404)
