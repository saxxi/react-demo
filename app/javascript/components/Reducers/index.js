import {combineReducers} from 'redux'
// import {routerReducer} from 'react-router-redux'
// import {reducer as formReducer} from "redux-form"

import documents from './documents'

const reducers = combineReducers({
  documents,
  // routing: routerReducer,
  // form: formReducer,
})

export default reducers
