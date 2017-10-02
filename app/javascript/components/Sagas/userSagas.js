import { call, put, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { loginUser } from '../Services/user-api'

function *destroySession(action) {
  yield put(push('/'))
}

function *submitLogin(action) {
  const { email, password } = action.user
  let result
  try {
    result = yield call(loginUser, email, password)
  } catch (e) {
    console.log(e);
    return
  }
  yield all([
    put({
      type: 'login.SUBMIT_SUCCESS',
      userToken: result.data.auth_token,
    }),
    put(push('/documents'))
  ])
}

export {
  destroySession,
  submitLogin,
}
