import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './Main'
import Posts from './Posts'
import PostEdit from './PostEdit'
import PostAdd from './PostAdd'
import PostDetails from './PostDetails'
import CommentEdit from './CommentEdit'
import Page404 from './Page404'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/:category' component={Posts} />
              <Route exact path='/:category/:post_id' component={PostDetails} />
              <Route exact path='/post/edit/:id' component={PostEdit} />
              <Route exact path='/post/add/new' component={PostAdd} />
              <Route exact path='/:category/:id/comment/edit/' component={CommentEdit} />
              <Route path='*' component={Page404} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
