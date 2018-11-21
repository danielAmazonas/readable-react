import {
  ALL_POSTS,
  EDIT_POST,
  POST_BY_ID,
  ADD_POST,
  VOTE_POST,
  DEL_POST
} from '../actionTypes'

const STATE_INIT = []

export default function (state = STATE_INIT, action) {
  switch (action.type) {
    case ALL_POSTS:
      return action.posts
    case EDIT_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          return action.post
        }
        return post
      })
    case POST_BY_ID:
      return state.map(post => {
        if (post.id === action.post.id) {
          return action.post
        }
        return post
      })
    case ADD_POST:
      return state.concat(action.post)
    case VOTE_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          return action.post
        }
        return post
      })
    case DEL_POST:
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