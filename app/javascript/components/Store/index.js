import {createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
// import {routerMiddleware} from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory'
// import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
// import sagas from '../sagas'

// const sagaMiddleware = createSagaMiddleware()

const storeFactory = () => {
  // const history = createHistory()

  let middleware = applyMiddleware(
    logger,
    // routerMiddleware(history),
    // sagaMiddleware
  )

  if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
    middleware = compose(middleware, window.devToolsExtension())
  }

  const store = createStore(reducers, {}, middleware)
  // sagaMiddleware.run(sagas)
  return {store} // , history
}

export {storeFactory}
