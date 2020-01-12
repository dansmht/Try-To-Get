import React from 'react'
import './ThemeColors.css'

const ThemeColors = ({bgColors, handleClick}) => (
    <div className='theme-colors'>
        {bgColors.map((color, i) => (
            <div key={i} className='color-box' onClick={handleClick}>
                {i + 1}
            </div>
        ))}
    </div>
)

export default ThemeColors
