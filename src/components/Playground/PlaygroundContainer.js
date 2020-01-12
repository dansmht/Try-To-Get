import React, { useEffect } from 'react'
import Playground from './Playground'
import { connect } from 'react-redux'
import { changeColor } from '../../redux/actions/themeActions'

const PlaygroundContainer = ({theme: {color}, changeColor}) => {

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

    const handleClick = e => {
        console.log(e.currentTarget.dataset.cellIndex)
    }

    return (
        <Playground handleClick={handleClick} />
    )
}

const mapStateToProps = state => ({
    theme: state.theme,
})

export default connect(mapStateToProps, {changeColor})(PlaygroundContainer)
