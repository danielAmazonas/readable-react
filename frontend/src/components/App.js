import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from '../components/Main'
import Posts from './Posts'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/:category' component={Posts} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
