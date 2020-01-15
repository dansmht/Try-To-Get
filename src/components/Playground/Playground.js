import React from 'react'
import './Playground.css'

const Playground = ({cellsPerRow, cellsPerCol}) => {

    document.documentElement.style.setProperty('--cells-per-row', cellsPerRow)

    return (
        <div className='playground'>
            {
                Array(...Array(cellsPerRow * cellsPerCol))
                    .map((_, i) => <div key={i} className='cell' />)
            }
        </div>
    )
}

export default Playground
