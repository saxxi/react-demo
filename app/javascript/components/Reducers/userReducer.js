import React from 'react'

function userReducer(state = {}, action) {
  switch (action.type) {
    case 'login.SUBMIT_SUCCESS':
      return {
        ...state,
        loginSuccess: true,
        userToken: action.userToken,
      }
      break;
    default:
      return state
  }
}

export { userReducer }
