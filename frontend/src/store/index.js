import { applyMiddleware, compose, createStore } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

export function configureStore(initialState = {}) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  )
  return store
}

export const store = configureStore()