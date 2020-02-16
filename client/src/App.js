import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Show from './components/Show'
import add_items from './components/add_items'
import edit_items from './components/edit_items'
import edit from './components/edit'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/show/:id" component={Show} />
            <Route exact path="/add_items" component={add_items} />
            <Route exact path="/edit_items" component={edit_items} />
            <Route exact path="/edit/:id" component={edit} />

          </div>
        </div>
      </Router>
    )
  }
}

export default App
