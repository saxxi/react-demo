import { takeLatest } from 'redux-saga/effects'
import { all, fork } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

import { locationChanged } from './locationChanged'
import { destroySession } from './userSagas'
import { listDocuments, fetchDocument } from './documents'

export default function* sagas() {
  yield all([
    fork(takeLatest, LOCATION_CHANGE, locationChanged),
    fork(takeLatest, 'server.UNAUTHORISED', destroySession),
    fork(takeLatest, 'documents.FETCH_LIST', listDocuments),
    fork(takeLatest, 'document.FETCH_DOCUMENT', fetchDocument),
    // fork(takeLatest, 'documents.SAVE', saveDocument)
  ])
}
