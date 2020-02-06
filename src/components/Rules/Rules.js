import React from 'react'
import './Rules.css'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'

const Rules = () => {
  return (
    <div className='rules-wrapper'>
      <BackToMenu />
      <section className='rules'>
        <h2>Rules</h2>
        <p>In the beginning press F11, if you want your best scores to be added to the best scores, you should login /
          register in the Best Scores tab</p>
        <p>Let's get to the point. There is a field with a certain number of cells. There is also a theme that is
          randomly selected for which 5 specific colors are selected. And the cells will appear one by one of any of the
          given colors, you will need to click on them and earn points, you are given only 60 seconds</p>
        <p>If the desired cell appears with the same background color, you can change the background color by clicking
          on a specific number with the background or using keys 1-5 on your keyboard</p>
        <p>Can you beat my record? :)</p>
      </section>
      <Snow />
    </div>
  )
}

export default Rules
