import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { PLocks } from './pages'

const Main = () => {
  return <h1>Hello</h1>
}
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/locks' component={PLocks} />
      </Switch>
    </Router>
  )
}

export default App
