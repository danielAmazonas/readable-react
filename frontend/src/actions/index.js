import * as api from '../api'

import {
  CATEGORY_REQUEST,
  ALL_POSTS,
  ADD_POST,
  EDIT_POST,
  ALL_COMMENTS,
  EDIT_COMMENT,
  ADD_COMMENT,
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

const addPost = postNew => ({
  type: ADD_POST,
  post: postNew
})

const commentRequest = comments => ({
  type: ALL_COMMENTS,
  comments
})

const editComment = commentNew => ({
  type: EDIT_COMMENT,
  comment: commentNew
})

const addComment = commentNew => ({
  type: ADD_COMMENT,
  comment: commentNew
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

export const getAddPost = (post) => {
  return dispatch => api.addPost(post)
    .then(postNew => dispatch(addPost(postNew)))
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

export const getDelPost = (id) => {
  return dispatch => api.delPost(id)
    .then(post => dispatch(postRequest(post)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getVotePost = (id, vote) => {
  return dispatch => api.votePost(id, vote)
    .then(post => dispatch(postRequest(post)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getComments = (idPost) => {
  return dispatch => api.getComments(idPost)
    .then(comment => dispatch(commentRequest(comment)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getEditComment = (idComment, comment) => {
  return dispatch => api.editComment(idComment, comment)
    .then(newComment => dispatch(editComment(newComment)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getAddComment = (comment) => {
  return dispatch => api.addComment(comment)
    .then(comment => dispatch(addComment(comment)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export function getDelComment(idComment, idPost) {
  return dispatch => api.delComment(idComment)
    .then(comment => dispatch(commentRequest(idPost)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getVoteComment = (id, vote) => {
  return dispatch => api.voteComment(id, vote)
    .then(comment => dispatch(commentRequest(comment)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}