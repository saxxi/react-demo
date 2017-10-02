function documentsReducer(state = {}, action) {
  switch (action.type) {
    case 'documents.FETCH_LIST_SUCCESS':
      return {
        ...state,
        list: action.documents,
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
    case 'document.FETCH_DOCUMENT_SUCCESS':
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
