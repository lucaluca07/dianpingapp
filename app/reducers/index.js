import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'
import userinfo from './userinfo'

const rootReducer =  combineReducers({
  userinfo,
  router: routerReducer
})

export default rootReducer
