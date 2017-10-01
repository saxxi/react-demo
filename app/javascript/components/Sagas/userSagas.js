import { put } from 'redux-saga/effects'
import { push } from 'react-router-redux'

function *destroySession(action) {
  yield put(push('/'))
}

export {
  destroySession
}
