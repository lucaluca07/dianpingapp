import {createStore,compose,applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

export default  function configureStore(initialState) {
  const history = createHistory()
  const middleware = routerMiddleware(history)
  const store = createStore(rootReducer,initialState,
    compose(applyMiddleware(middleware),window.devToolsExtension ? window.devToolsExtension() : undefined)
  )
  return store
}