import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Game from './components/Game/Game'
import Rules from './components/Rules/Rules'
import Settings from './components/Settings/Settings'
import Menu from './components/Menu/Menu'
import BestScoresContainer from './components/BestScores/BestScoresContainer'
import About from './components/About/About'
import Page404 from './components/Page404/Page404'

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Switch>
          <Route exact path='/' component={Menu} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/rules' component={Rules} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/best' component={BestScoresContainer} />
          <Route exact path='/about' component={About} />
          <Route component={Page404} />
        </Switch>
      </div>
    </div>
  )
}

export default App
