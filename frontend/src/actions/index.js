import * as ReadableAPI from '../api'

import {
  CATEGORY_REQUEST,
  ALL_POSTS,
  THROW_ERROR
} from '../actionTypes'

const categoryRequest = categories => ({
  type: CATEGORY_REQUEST,
  categories
})

const postRequest = posts => ({
  type: ALL_POSTS,
  posts
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

export const getPosts = () => {
  return dispatch => ReadableAPI.getPosts()
    .then(post => dispatch(postRequest(post)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}