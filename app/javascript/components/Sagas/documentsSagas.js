import { call, put, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import api from '../Services/documents-api'
import { handleServerError } from '../Utils/serverUtils'

export function *list(action) {
  const { pageNumber, pageSize } = action
  let result

  try {
    result = yield call(api.list, pageNumber, pageSize)
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

export function *show(action) {
  let result
  try {
    result = yield call(api.show, action.documentId)
  } catch (e) {
    return yield put(handleServerError(e))
  }

  yield put({
    type: 'document.FETCH_DOCUMENT_SUCCESS',
    document: result.data,
  })
}

export function *save(action) {
  const { document } = action

  let result
  try {
    result = yield call(api.save, document)
  } catch (e) {
    return yield put(handleServerError(e))
  }

  yield put({
    type: 'document.SAVE_SUCCESS',
    document: result.data,
  })
}


export function *destroy(action) {
  const { documentId } = action

  let result
  try {
    result = yield call(api.destroy, documentId)
  } catch (e) {
    return yield put(handleServerError(e))
  }

  yield all([
    put({
      type: 'document.DESTROY_SUCCESS',
    }),
    put(push('/documents'))
  ])
}

export default {
  list,
  show,
  save,
  destroy,
}
