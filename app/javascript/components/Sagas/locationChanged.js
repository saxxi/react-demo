import {put} from 'redux-saga/effects'

export function *locationChanged(action) {
  if (action.payload.pathname == '/documents') {
    const query = new URLSearchParams(action.payload.search)
    const pageNumber = Number(query.get('page')) || 1
    yield put({
      type: 'documents.FETCH_LIST',
      pageNumber: pageNumber,
      pageSize: 3
    })
  }
}
