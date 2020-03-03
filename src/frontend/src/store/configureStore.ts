import { createStore } from 'redux'
import decisionReducer from './decision/reducer'

export default createStore(decisionReducer)