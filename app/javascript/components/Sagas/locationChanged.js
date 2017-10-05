import { put } from 'redux-saga/effects'

import { FETCH_LIST as DOCUMENTS_FETCH_LIST } from '../Actions/documentActions'

export function *locationChanged(action) {
  if (action.payload.pathname == '/documents') {
    const query = new URLSearchParams(action.payload.search)
    const pageNumber = Number(query.get('page')) || 1
    yield put({
      type: DOCUMENTS_FETCH_LIST,
      pageNumber: pageNumber,
      pageSize: 3
    })
  }
}
