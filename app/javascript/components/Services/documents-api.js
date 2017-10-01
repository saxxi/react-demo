import axios from 'axios'
// import {getUserToken} from './Session'

var instance = axios.create({
  headers: {
    'Authorization': `Bearer ${'getUserToken()'}`
  }
})

const getDocuments = (pageNumber, pageSize) => (
  instance.get('/documents.json', {
    params: {
      page_number: pageNumber,
      page_size: pageSize
    }
  })
)

const getDocument = (documentId) => (
  instance.get(`/documents/${documentId}.json`)
)

export {
  getDocuments,
  getDocument,
}
