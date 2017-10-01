import {call, put} from 'redux-saga/effects'

import {getDocuments} from '../Services/documents-api'

export function *listDocuments(action) {
  const {pageNumber, pageSize} = action
  const result = yield call(getDocuments, pageNumber, pageSize)

  // TODO: continue here
  // .catch((error) => {
  //   if (error && error.response && error.response.status == 401) { ... }
  // })

  yield put({
    type: 'documents.FETCH_LIST_SUCCESS',
    pageNumber,
    pageSize,
    documents: result.data.documents,
    totalCount: result.data.meta.total_count,
  })
}

export function *saveDocument(action) {
  const {document} = action

  console.log(document, 'gotit!');
}
