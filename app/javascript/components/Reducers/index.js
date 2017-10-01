import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// import {reducer as formReducer} from "redux-form"

import {
  documentsReducer as documents,
  documentReducer as document,
} from './documentsReducer'

const reducers = combineReducers({
  documents,
  document,
  routing: routerReducer,
  // form: formReducer,
})

export default reducers
