import * as ReadableAPI from '../api'

import { CATEGORY_REQUEST, THROW_ERROR } from '../actionTypes'

const categoryRequest = categories => ({
  type: CATEGORY_REQUEST,
  categories
})

export const throwError = () => ({
  type: THROW_ERROR
})

export const getCategories = () => {
  return dispatch => ReadableAPI.getCategories()
    .then(categories => dispatch(categoryRequest(categories)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}