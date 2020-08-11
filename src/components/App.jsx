import React from "react"
import "../styles/App.css"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import DarkMode from "./DarkMode"
import Users from "../pages/Users"
import Landing from "../pages/Landing"

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route path="/" exact render={() => <Landing />} />
            <Route path="/users" exact render={() => <Users />} />
          </Switch>
        </Router>

        <DarkMode />
      </div>
    </div>
  )
}

export default App
