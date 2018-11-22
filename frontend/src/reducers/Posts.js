import {
  ALL_POSTS,
  EDIT_POST,
  POST_BY_ID,
  ADD_POST,
  VOTE_POST,
  DEL_POST,
  COMMENT_COUNT_ADD,
  COMMENT_COUNT_DEL
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
    case COMMENT_COUNT_ADD:
      return state.map(post => {
        if (post.id === action.post.id) {
          post.commentCount = post.commentCount + 1
        }
        return post
      })
    case COMMENT_COUNT_DEL:
      return state.map(post => {
        if (post.id === action.post.id) {
          post.commentCount = post.commentCount - 1
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
      return state.filter(post => post.id !== action.post.id)
    default:
      return state
  }
}