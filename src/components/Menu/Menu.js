import React from 'react'
import './Menu.css'
import Button from '../Button/Button'
import Snow from '../Snow/Snow'

const Menu = () => {
    return (
        <div className='menu'>
            <h1>Try To Get</h1>
            <Button link title='Start Game' path='/game' />
            <Button link title='Rules' path='/rules' />
            <Button link title='Settings' path='/settings' />
            <Button link title='Best scores' path='/best' />
            <Button link title='About' path='/about' />
            <Snow/>
        </div>
    )
}

export default Menu
