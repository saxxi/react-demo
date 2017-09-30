import { takeLatest } from 'redux-saga/effects'
import { all, fork } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

// import { listDocuments, saveDocument } from './documents'
import { locationChanged } from './locationChanged'


console.log(LOCATION_CHANGE, 'asd');
export default function* sagas() {
  yield all([
    fork(takeLatest, LOCATION_CHANGE, locationChanged),
    // fork(takeLatest, 'documents.FETCH_LIST', listDocuments),
    // fork(takeLatest, 'documents.SAVE', saveDocument)
  ])
}
