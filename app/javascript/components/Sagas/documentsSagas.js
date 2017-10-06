import { call, put, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import api from '../Services/documents-api'
import { handleServerError } from '../Utils/serverUtils'
import documentActions from '../Actions/documentActions'

export function *list(action) {
  const { pageNumber, pageSize } = action
  let result

  try {
    result = yield call(api.list, pageNumber, pageSize)
  } catch (e) {
    return yield put(handleServerError(e))
  }

  yield put(documentActions.fetchListSuccess(
    result.data.documents,
    result.data.meta.total_count,
    pageNumber,
    pageSize
  ))
}

export function *show(action) {
  let result
  try {
    result = yield call(api.show, action.id)
  } catch (e) {
    return yield put(handleServerError(e))
  }

  yield put(documentActions.fetchSingleSuccess('document', result.data))
}

export function *save(action) {
  const { document } = action

  let result
  try {
    result = yield call(api.save, document)
  } catch (e) {
    return yield put(handleServerError(e))
  }

  yield put(documentActions.saveSingleSuccess(result.data))
}

export function *destroy(action) {
  const { id } = action

  let result
  try {
    result = yield call(api.destroy, id)
  } catch (e) {
    return yield put(handleServerError(e))
  }

  yield all([
    put(documentActions.destroySingleSuccess()),
    put(push('/documents'))
  ])
}

export default {
  list,
  show,
  save,
  destroy,
}
