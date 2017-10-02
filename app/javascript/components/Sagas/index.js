import { takeLatest } from 'redux-saga/effects'
import { all, fork } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

import { locationChanged } from './locationChanged'
import { destroySession, submitLogin } from './userSagas'
import documentsSagas from './documentsSagas'

export default function* sagas() {
  yield all([
    fork(takeLatest, LOCATION_CHANGE, locationChanged),
    fork(takeLatest, 'server.UNAUTHORISED', destroySession),
    fork(takeLatest, 'login.FORM_SUBMITTED', submitLogin),
    fork(takeLatest, 'documents.FETCH_LIST', documentsSagas.list),
    fork(takeLatest, 'document.FETCH_DOCUMENT', documentsSagas.show),
    fork(takeLatest, 'document.SAVE', documentsSagas.save),
    fork(takeLatest, 'document.DESTROY', documentsSagas.destroy),
  ])
}
