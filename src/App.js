import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Game from './components/Game/Game'
import Rules from './components/Rules/Rules'
import Menu from './components/Menu/Menu'
import BestScoresContainer from './components/BestScores/BestScoresContainer'
import About from './components/About/About'
import Soon from './components/Soon/Soon'

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route exact path='/' component={Menu} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/rules' component={Rules} />
          <Route exact path='/best' component={BestScoresContainer} />
          <Route exact path='/about' component={About} />
          <Route component={Soon} />
        </Switch>
      </div>
    </div>
  )
}

export default App
