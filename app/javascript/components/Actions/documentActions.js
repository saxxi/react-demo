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
  list = [],
  totalCount = 0,
  pageNumber = 1,
  pageSize = 10,
) => ({
  type: FETCH_LIST_SUCCESS,
  list,
  pageNumber,
  pageSize,
  totalCount,
})

const fetchSingle = id => ({
  type: FETCH_DOCUMENT,
  id: id,
})

const fetchSingleSuccess = (objectName, payload) => ({
  type: FETCH_DOCUMENT_SUCCESS,
  [objectName]: payload,
})

const saveSingle = (objectName, payload) => ({
  type: SAVE,
  [objectName]: payload,
})

const saveSingleSuccess = payload => ({
  type: SAVE_SUCCESS,
  payload,
})

const destroySingle = id => ({
  type: DESTROY,
  id
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
