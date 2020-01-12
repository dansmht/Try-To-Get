import React from 'react'
import './Snow.css'

const Snow = () => Array(...Array(200)).map((_, i) => <div key={i} className='snow' />)

export default Snow
