import { combineReducers } from 'redux'
import {
  CATEGORY_REQUEST,
  ALL_POSTS,
  ADD_POST,
  EDIT_POST,
  ALL_COMMENTS,
} from '../actionTypes'

export const categories = (state = [], action) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return action.categories
    default:
      return state
  }
}

export const posts = (state = [], action) => {
  switch (action.type) {
    case ALL_POSTS:
      return action.posts
    default:
      return state
  }
}

export const editPost = (state = [], action) => {
  switch (action.type) {
    case EDIT_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          return action.post
        }
        return post
      })
    default:
      return state
  }
}

export const addPost = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return state.concat(action.post)
    default:
      return state
  }
}

export const comments = (state = [], action) => {
  switch (action.type) {
    case ALL_COMMENTS:
      return action.comments
    default:
      return state
  }
}

export const reducers = combineReducers({
  categories,
  posts,
  addPost,
  editPost,
  comments,
})