import React from 'react'
import { connect } from 'react-redux'
import { changeColor } from '../../redux/actions/themeActions'
import ThemeColors from './ThemeColors'

const ThemeColorsContainer = ({ theme: { bgColors }, changeColor }) => {
  bgColors.forEach((color, i) => {
    document.documentElement.style.setProperty(`--color-box-${i + 1}`, color)
  })

  const handleClick = ({ currentTarget: { textContent } }) => {
    const newColor = getComputedStyle(document.documentElement)
      .getPropertyValue(`--color-box-${textContent}`)
    changeColor(newColor)
  }

  return <ThemeColors bgColors={bgColors} handleClick={handleClick} />
}

const mapStateToProps = state => ({
  theme: state.theme,
})

export default connect(mapStateToProps, { changeColor })(ThemeColorsContainer)
