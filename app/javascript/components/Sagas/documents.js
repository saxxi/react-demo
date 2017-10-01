import { call, put } from 'redux-saga/effects'

import { getDocuments, getDocument } from '../Services/documents-api'
import { handleServerError } from '../Utils/serverUtils'

export function *listDocuments(action) {
  const { pageNumber, pageSize } = action
  let result

  try {
    result = yield call(getDocuments, pageNumber, pageSize)
  } catch (e) {
    return yield put(handleServerError(e))
  }

  yield put({
    type: 'documents.FETCH_LIST_SUCCESS',
    pageNumber,
    pageSize,
    documents: result.data.documents,
    totalCount: result.data.meta.total_count,
  })
}

export function *fetchDocument(action) {
  let result
  try {
    result = yield call(getDocument, action.documentId)
  } catch (e) {
    return yield put(handleServerError(e))
  }

  yield put({
    type: 'document.FETCH_DOCUMENT_SUCCESS',
    document: result.data,
  })
}

export function *saveDocument(action) {
  const {document} = action

  console.log(document, 'gotit!');
}
