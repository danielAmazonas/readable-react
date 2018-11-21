import { combineReducers } from 'redux'
import Categories from './Categories'
import Posts from './Posts'
import Comments from './Comments'

const reducers = combineReducers({
  categories: Categories,
  posts: Posts,
  comments: Comments
})

export default reducers