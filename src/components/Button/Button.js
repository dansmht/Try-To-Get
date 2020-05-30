import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const Button = ({ title, handleClick, link, path, className }) => {
  return link
    ? (
      <Link className={className ? className + ' button' : 'button'} to={path} onClick={handleClick}>
        {title}
      </Link>
    ) : (
      <button className={className ? className + ' button' : 'button'} onClick={handleClick}>
        {title}
      </button>
    )
}

export default Button
