import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function isSessionValid() {
  if (getUserToken()) {
    console.log('Session is valid!')
    return true
  }
  console.log('No valid session.')
  return false
}

export function createSession(authToken) {
  cookies.set('authToken', authToken, { path: '/' })
}

export function getUserToken() {
  return cookies.get('authToken')
}

export function destroySession() {
  console.log('Session destroyed!')
  cookies.remove('authToken')
}

export default {
  isSessionValid,
  createSession,
  getUserToken,
  destroySession
}
