import React from 'react'
import './About.css'
import BackToMenu from '../BackToMenu/BackToMenu'
import Snow from '../Snow/Snow'

const About = () => {
  return (
    <div className='about-wrapper'>
      <BackToMenu />
      <section className='about'>
        <h2>About</h2>
        <p>Who am I?</p>
        <p>I am an ordinary third year student. I live in Gomel, Belarus. I am engaged in frontend development.</p>
        <p>Why did I make such a game?</p>
        <p>Because there is already a lot of everything on the Internet, and I wanted to do something of my own. And one
          day the idea with this game flew into my head and I began to do. Much more can be developed in this game and
          it's cool. Also this game is for my portfolio of work and training frontend development skills.</p>
        <p>My email: dansmht16@gmail.com - ask questions</p>
      </section>
      <Snow />
    </div>
  )
}

export default About
