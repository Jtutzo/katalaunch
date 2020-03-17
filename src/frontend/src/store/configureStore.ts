import { createStore, applyMiddleware } from 'redux'
import middleware from './decision/middleware'
import decisionReducer from './decision/reducer'

export default createStore(decisionReducer, applyMiddleware(middleware))
