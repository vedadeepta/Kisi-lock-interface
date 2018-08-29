import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { PHome, PLocks } from './pages'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={PHome} />
        <Route exact path='/locks' component={PLocks} />
      </Switch>
    </Router>
  )
}

export default App
