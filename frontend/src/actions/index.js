import * as api from '../api'

import {
  CATEGORY_REQUEST,
  ALL_POSTS,
  ADD_POST,
  EDIT_POST,
  POST_BY_ID,
  VOTE_POST,
  DEL_POST,
  ALL_COMMENTS,
  EDIT_COMMENT,
  ADD_COMMENT,
  VOTE_COMMENT,
  DEL_COMMENT,
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

const postById = post => ({
  type: POST_BY_ID,
  post: post
})

const addPost = postNew => ({
  type: ADD_POST,
  post: postNew
})

const votePost = post => ({
  type: VOTE_POST,
  post
})

const delPost = post => ({
  type: DEL_POST,
  post
})

const commentRequest = comments => ({
  type: ALL_COMMENTS,
  comments
})

const editComment = commentEdited => ({
  type: EDIT_COMMENT,
  comment: commentEdited
})

const addComment = commentNew => ({
  type: ADD_COMMENT,
  comment: commentNew
})

const voteComment = comment => ({
  type: VOTE_COMMENT,
  comment
})

const delComment = comment => ({
  type: DEL_COMMENT,
  comment
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

export const getPostById = (id) => {
  return dispatch => api.postById(id)
    .then(post => dispatch(postById(post)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getDelPost = (id) => {
  return dispatch => api.delPost(id)
    .then(post => dispatch(delPost(post)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getVotePost = (id, vote) => {
  return dispatch => api.votePost(id, vote)
    .then(post => dispatch(votePost(post)))
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
    .then(comment => dispatch(delComment(idPost)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}

export const getVoteComment = (id, vote) => {
  return dispatch => api.voteComment(id, vote)
    .then(comment => dispatch(voteComment(comment)))
    .catch(err => {
      console.error(err)
      dispatch(throwError())
    })
}