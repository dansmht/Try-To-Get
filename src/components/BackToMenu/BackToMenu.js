import React from 'react'
import './BackToMenu.css'
import Button from '../Button/Button'

const BackToMenu = ({ title }) => <div className="back-to-menu"><Button link title={title} path='/' /></div>

export default BackToMenu
