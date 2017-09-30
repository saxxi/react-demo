function documentsReducer(state = {}, action) {
  switch (action.type) {
    case 'documents.FETCH_LIST_SUCCESS':
      return {
        ...state,
        list: action.documents,
        pageCount: action.pageCount,
        pageNumber: action.pageNumber,
        pageSize: action.pageSize,
      }
    default:
      return state
  }
}

export {documentsReducer}
