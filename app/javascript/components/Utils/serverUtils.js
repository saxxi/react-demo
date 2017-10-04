import axios from 'axios'

import { getUserToken } from './Session'

const instance = axios.create()
const authToken = getUserToken()
console.log(`found token in cookies -${authToken}-`);
setAuthorizationToken(authToken)

function apiInstance() {
  return instance
}

function setAuthorizationToken(authToken) {
  if(authToken) {
    axios.defaults.headers.common['authorization'] = `Bearer ${authToken}`
  } else {
    delete axios.defaults.headers.common['authorization']
  }
}

function handleServerError(error) {
  if (error.response.status == 401) {
    return {
      type: 'server.UNAUTHORISED',
    }
  }
  return {
    type: 'server.GENERIC_ERROR',
    message: error.message,
  }
}

export {
  apiInstance,
  setAuthorizationToken,
  handleServerError,
}
