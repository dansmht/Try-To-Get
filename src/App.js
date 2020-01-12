import React from 'react'
import './App.css'
import Game from './components/Game/Game'
import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <Switch>
                    <Route path='/game' component={Game} />
                </Switch>
            </div>
        </div>
    )
}

export default App
