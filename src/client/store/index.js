import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from '../reducers'
import { unlockMiddleware } from '../middlewares'

const middleware = applyMiddleware(
  promise(),
  thunk,
  unlockMiddleware,
  logger()
)

export default createStore(reducer, middleware)
