import { combineReducers } from 'redux'
import {
  CATEGORY_REQUEST,
  ALL_POSTS,
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
  comments,
})