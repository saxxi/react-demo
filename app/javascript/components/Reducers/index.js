import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import { userReducer as user } from './userReducer'
import {
  documentsReducer as documents,
  documentReducer as document,
} from './documentsReducer'

const reducers = combineReducers({
  user,
  documents,
  document,
  routing: routerReducer,
  form: formReducer,
})

export default reducers
