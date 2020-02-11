import React from 'react'
import './ToggleButton.css'

const ToggleButton = ({ id, checked, language, handleChange }) => {
  return (
    <>
      <input className={language ? 'checkbox language' : 'checkbox'} type='checkbox'
             id={id} name={id} checked={checked} onChange={handleChange} />
      <label htmlFor={id} />
    </>
  )
}

export default ToggleButton
