import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Main'
import Posts from './Posts'
import PostEdit from './PostEdit'
import Comments from './Comments'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/:category' component={Posts} />
              <Route exact path='/:category/:title/:id' component={Comments} />
              <Route exact path='/edit/:id' component={PostEdit} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
