import { combineReducers } from 'redux'
import { CATEGORY_REQUEST } from '../actionTypes'

export const categories = (state = [], action) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return action.categories
    default:
      return state
  }
}

export const reducers = combineReducers({
  categories,
})