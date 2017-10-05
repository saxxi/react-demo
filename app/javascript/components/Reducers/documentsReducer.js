import {
  FETCH_LIST_SUCCESS,
  FETCH_DOCUMENT_SUCCESS,
} from '../Actions/documentActions'

function documentsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
        totalCount: action.totalCount,
        pageNumber: action.pageNumber,
        pageSize: action.pageSize,
      }
    default:
      return state
  }
}

function documentReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_DOCUMENT_SUCCESS:
      return {
        ...state,
        ...action.document,
      }
      break
    default:
      return state
  }
}

export {
  documentsReducer,
  documentReducer,
}
