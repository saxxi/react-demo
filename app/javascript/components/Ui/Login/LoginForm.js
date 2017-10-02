import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

function validateLogin(data, props) {
  const errors = {};
  if(!data.email) {
    errors.email = 'Required';
  }
  if(!data.password) {
    errors.password = 'Required';
  }
  return errors;
}

const renderTextField = props => (
  <TextField
    {...props.input}
    label={props.label}
    error={props.touched && props.error}
    helperText={props.touched && props.error ? props.error : null}
  />
)

const LoginForm = ({ handleSubmit, pristine, reset, submitting, onCloseDialog }) => {
  return (
    <form onSubmit={handleSubmit}>
      <DialogTitle>Please login to continue</DialogTitle>
      <DialogContent>
        <div>
          <Field name="email" component={renderTextField} label="E-mail"/>
        </div>
        <div>
          <Field name="password" component={renderTextField} label="password"/>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDialog} color="primary">
          Cancel
        </Button>
        <Button type="submit" disabled={pristine || submitting}>Login</Button>
      </DialogActions>
    </form>
  )
}

export default reduxForm({
  form: 'login',
  validate: validateLogin,
  // asyncValidate
})(LoginForm)
