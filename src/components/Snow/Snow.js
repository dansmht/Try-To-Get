import React from 'react'
import './Snow.css'

const Snow = () => {
    return <div>
        {Array(...Array(200)).map((_, i) => <div key={i} className='snow' />)}
    </div>
}

export default Snow
