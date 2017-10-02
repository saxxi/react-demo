import axios from 'axios'

var instance = axios.create()

const loginUser = (email, password) => (
  instance.post('/auth_user.json', {
    email: email,
    password: password
  })
)

export {
  loginUser,
}
