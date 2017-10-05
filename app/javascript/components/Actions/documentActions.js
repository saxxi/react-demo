export const FETCH_LIST = 'documents.FETCH_LIST'
export const FETCH_LIST_SUCCESS = 'documents.FETCH_LIST_SUCCESS'
export const FETCH_DOCUMENT = 'document.FETCH_DOCUMENT'
export const FETCH_DOCUMENT_SUCCESS = 'document.FETCH_DOCUMENT_SUCCESS'
export const SAVE = 'document.SAVE'
export const SAVE_SUCCESS = 'document.SAVE_SUCCESS'
export const DESTROY = 'document.DESTROY'
export const DESTROY_SUCCESS = 'document.DESTROY_SUCCESS'

const fetchList = () => ({
  type: FETCH_LIST,
})

const fetchListSuccess = (
  documents = [],
  totalCount = 0,
  pageNumber = 1,
  pageSize = 10,
) => ({
  type: FETCH_LIST_SUCCESS,
  list: documents,
  pageNumber,
  pageSize,
  totalCount,
})

const fetchSingle = documentId => ({
  type: FETCH_DOCUMENT,
  documentId: documentId,
})

const fetchSingleSuccess = document => ({
  type: FETCH_DOCUMENT_SUCCESS,
  document,
})

const saveSingle = document => ({
  type: SAVE,
  document,
})

const saveSingleSuccess = document => ({
  type: SAVE_SUCCESS,
  document,
})

const destroySingle = documentId => ({
  type: DESTROY,
  documentId
})

const destroySingleSuccess = () => ({
  type: DESTROY_SUCCESS,
})

export default {
  fetchList,
  fetchListSuccess,
  fetchSingle,
  fetchSingleSuccess,
  saveSingle,
  saveSingleSuccess,
  destroySingle,
  destroySingleSuccess,
}
