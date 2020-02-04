import React, { useEffect } from 'react'
import Playground from './Playground'
import { connect } from 'react-redux'
import { changeColor } from '../../redux/actions/themeActions'
import { increaseScore } from '../../redux/actions/playgroundManagerActions'

const PlaygroundContainer = ({ theme: { bgColors, color }, gameState: { cellsPerRow, cellsPerCol }, changeColor, increaseScore }) => {

  useEffect(() => {
    const populateDesiredCell = () => {
      const rndCell = document.querySelectorAll('.cell')[Math.floor(Math.random() * (cellsPerCol * cellsPerRow))]
      const desiredCell = document.createElement('div')
      desiredCell.classList.add('desired-cell')
      document.documentElement.style.setProperty('--desired-cell-bg-color', bgColors[Math.floor(Math.random() * bgColors.length)])
      rndCell.appendChild(desiredCell)
      desiredCell.addEventListener('click', () => {
        rndCell.removeChild(desiredCell)
        increaseScore()
        populateDesiredCell()
      })
    }
    populateDesiredCell()
  }, [cellsPerRow, cellsPerCol, increaseScore, bgColors])

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-bg-color', color)
  }, [color])

  useEffect(() => {
    const handleChangeColor = e => {
      if (e.repeat) return

      if (~['1', '2', '3', '4', '5'].indexOf(e.key)) {
        const newColor = getComputedStyle(document.documentElement)
          .getPropertyValue(`--color-box-${e.key}`)
        changeColor(newColor)
      }
    }

    document.addEventListener('keydown', handleChangeColor)
    return () => {
      document.removeEventListener('keydown', handleChangeColor)
    }
  }, [changeColor])

  return (
    <Playground cellsPerRow={cellsPerRow} cellsPerCol={cellsPerCol} />
  )
}

const mapStateToProps = state => ({
  theme: state.theme,
  gameState: state.gameState,
})

export default connect(mapStateToProps, { changeColor, increaseScore })(PlaygroundContainer)
