import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Learn from './views/learn'
import Work from './views/work'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>App</h1>
          <nav>
            <ul>
              <li><Link to="/learn">Learn</Link></li>
              <li><Link to="/work">Work</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/learn">
              <Learn />
            </Route>
            <Route path="/work">
              <Work />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
