const api = "http://localhost:3001"

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/**
 * @description Pegar todas as Categorias
 */
export const getCategories = () =>
  fetch(`${api}/categories`, {
    headers
  })
    .then(res => res.json())
    .then(data => data.categories)

/**
 * @description Pegar todos os Posts
 */
export const getPosts = () =>
  fetch(`${api}/posts`, {
    method: 'GET',
    headers
  })
    .then(res => res.json())
    .then(data => {
      return data
    })

/**
 * @description Adiciona Post
 * @param {*} post 
 */
export const addPost = (post) =>
  fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => {
      return data
    })


/**
 * @description Pega o Post pelo id para edição
 * @param {*} idPost 
 * @param {*} post 
 */
export const editPost = (idPost, post) =>
  fetch(`${api}/posts/${idPost}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => {
      return data
    })

/**
 * @description Pegar todos os Comments pelo id do post
 * @param {*} idPost 
 */
export const getComments = idPost =>
  fetch(`${api}/posts/${idPost}/comments`, {
    method: 'GET',
    headers
  })
    .then(res => res.json())
    .then(data => {
      return data
    })