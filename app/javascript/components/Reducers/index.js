import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
// import {reducer as formReducer} from "redux-form"

import {documentsReducer as documents} from './documentsReducer'

const reducers = combineReducers({
  documents,
  routing: routerReducer,
  // form: formReducer,
})

export default reducers
