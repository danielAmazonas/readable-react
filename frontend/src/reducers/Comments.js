import {
  ALL_COMMENTS,
  EDIT_COMMENT,
  ADD_COMMENT,
  VOTE_COMMENT,
  DEL_COMMENT
} from '../actionTypes'

const STATE_INIT = []

export default function (state = STATE_INIT, action) {
  switch (action.type) {
    case ALL_COMMENTS:
      return action.comments
    case EDIT_COMMENT:
      return state.map(comment => {
        if (comment.id === action.comment.id) {
          return action.comment
        }
        return comment
      })
    case ADD_COMMENT:
      return state.concat(action.comment)
    case VOTE_COMMENT:
      return state.map(comment => {
        if (comment.id === action.comment.id) {
          return action.comment
        }
        return comment
      })
    case DEL_COMMENT:
      return state.filter(comment => comment.id !== action.comment.id)
    default:
      return state
  }
}