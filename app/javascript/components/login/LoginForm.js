import React from 'react'
import TextField from 'material-ui/TextField'

const LoginForm = ({handleSubmit}) => (
  <div>
    <div>
      <TextField name="email"
        fullWidth={true}
        label="E-mail" />
    </div>
    <div>
      <TextField name="password"
        fullWidth={true}
        label="Password" />
    </div>
  </div>
)

export default LoginForm
