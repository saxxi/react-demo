import { call, put, all } from 'redux-saga/effects'
import { push } from 'react-router-redux'

import { destroySession } from '../Utils/Session'
import { loginUser } from '../Services/user-api'
import { setAuthorizationToken } from '../Utils/serverUtils'

function *logout(action) {
  destroySession()
  setAuthorizationToken()
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

  setAuthorizationToken(result.data.auth_token)

  yield all([
    put({
      type: 'login.SUBMIT_SUCCESS',
      userToken: result.data.auth_token,
    }),
    put(push('/documents'))
  ])
}

function *submitSuccess(action) {
  yield put({
    type: 'login.LOGGED_IN',
    loginSuccess: true,
    userToken: action.userToken,
  })
}

export default {
  logout,
  submitLogin,
  submitSuccess,
}
