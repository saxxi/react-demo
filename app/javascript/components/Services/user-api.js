import { apiInstance } from '../Utils/serverUtils'

const instance = apiInstance()

const loginUser = (email, password) => (
  instance.post('/auth_user.json', {
    email: email,
    password: password
  })
)

export {
  loginUser,
}
