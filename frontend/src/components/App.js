import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Main'
import Posts from './Posts'
import PostEdit from './PostEdit'
import PostAdd from './PostAdd'
import Comments from './Comments'
import CommentEdit from './CommentEdit'

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
              <Route exact path='/post/add' component={PostAdd} />
              <Route exact path='/:category/:title/:id/edit/comment/' component={CommentEdit} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
