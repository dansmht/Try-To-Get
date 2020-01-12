import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const Button = ({title, handleClick, link, path}) => {
    return link
        ? (
            <Link className='button' to={path}>
                {title}
            </Link>
        ) : (
            <button className='button' onClick={handleClick}>
                {title}
            </button>
        )
}

export default Button
