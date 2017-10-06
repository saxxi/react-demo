import { apiInstance } from '../Utils/serverUtils'

const instance = apiInstance()

const list = (pageNumber, pageSize) => (
  instance.get('/documents.json', {
    params: {
      page_number: pageNumber,
      page_size: pageSize
    }
  })
)

const show = (id) => (
  instance.get(`/documents/${id}.json`)
)

const save = (document = {}) => (
  (document.id) ? (
    instance.put(`/documents/${document.id}.json`, {
      document
    })
  ) : (
    instance.post(`/documents.json`, {
      document
    })
  )
)

const destroy = (id) => (
  instance.delete(`/documents/${id}.json`)
)

export default {
  list,
  show,
  save,
  destroy,
}
