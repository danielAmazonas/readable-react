import * as api from '../api'

import {
  CATEGORY_REQUEST,
  ALL_POSTS,
  EDIT_POST,
  ALL_COMMENTS,
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

const editPost = postEdited => ({
  type: EDIT_POST,
  post: postEdited
})

const commentRequest = comments => ({
  type: ALL_COMMENTS,
  comments
})

export const throwError = () => ({
  type: THROW_ERROR
})

export const getCategories = () => {
  return dispatch => api.getCategories()
    .then(category => dispatch(categoryRequest(category)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getPosts = () => {
  return dispatch => api.getPosts()
    .then(post => dispatch(postRequest(post)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getEditPost = (id, post) => {
  return dispatch => api.editPost(id, post)
    .then(postEdited => dispatch(editPost(postEdited)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getComments = idPost => {
  return dispatch => api.getComments(idPost)
    .then(comment => dispatch(commentRequest(comment)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}