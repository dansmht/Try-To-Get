import React from 'react'
import './Page404.css'
import Button from '../Button/Button'
import Snow from '../Snow/Snow'
import { connect } from 'react-redux'
import { getPage404Language } from '../../redux/selectors/languageSelectors'

const Page404 = ({ page404Language }) => {

  const { menu, title, description } = page404Language

  return (
    <div className='page-404'>
      <h3>{title}</h3>
      <h2>404</h2>
      <p>{description}</p>
      <Button link title={menu} path='/' />
      <Snow />
    </div>
  )
}

const mapStateToProps = state => ({
  page404Language: getPage404Language(state),
})

export default connect(mapStateToProps)(Page404)
