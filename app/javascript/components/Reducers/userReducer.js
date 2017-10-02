import React from 'react'

function userReducer(state = {}, action) {
  switch (action.type) {
    case 'login.SUBMIT_SUCCESS':
      return {
        ...state,
        user: {
          userToken: action.userToken,
        },
      }
      break;
    default:
      return state
  }
}

export { userReducer }
