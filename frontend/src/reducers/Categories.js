import {
  CATEGORY_REQUEST,
} from '../actionTypes'

const STATE_INIT = []

export default function (state = STATE_INIT, action) {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return action.categories
    default:
      return state
  }
}