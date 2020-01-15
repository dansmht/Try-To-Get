import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Game from './components/Game/Game'
import Menu from './components/Menu/Menu'
import Soon from './components/Soon/Soon'

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Menu} />
                    <Route path='/game' component={Game} />
                    <Route component={Soon} />
                </Switch>
            </div>
        </div>
    )
}

export default App
