export default function documents(state = {}, action) {
  switch (action.type) {
    case 'documents.FETCH_LIST_SUCCESS':
      return {
        ...state,
        pageCount: action.documents.meta.page_count,
        pageNumber: action.documents.meta.page_number,
        list: action.documents.list,
      }
    default:
      return state
  }
}
