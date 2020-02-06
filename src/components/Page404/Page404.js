import React from 'react'
import './Page404.css'
import Button from '../Button/Button'
import Snow from '../Snow/Snow'

const Page404 = () => {
  return (
    <div className='page-404'>
      <h3>Oops! Nothing was found.</h3>
      <h2>404</h2>
      <p>We can't find the page you're looking for.</p>
      <Button link title='Go back home' path='/' />
      <Snow />
    </div>
  )
}

export default Page404
