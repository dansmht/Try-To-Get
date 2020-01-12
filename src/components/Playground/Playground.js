import React from 'react'
import './Playground.css'

const Playground = ({handleClick}) => {

    const cellsPerRow = '5'
    const cellsPerCol = '5'
    document.documentElement.style.setProperty('--cells-per-row', cellsPerRow)

    return (
        <div className='playground'>
            {
                Array(...Array(cellsPerRow * cellsPerCol))
                    .map((_, i) => <div key={i} className='cell' data-cell-index={i + 1} onClick={handleClick} />)
            }
        </div>
    )
}

export default Playground
