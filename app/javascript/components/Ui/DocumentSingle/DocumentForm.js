import React from 'react'
import { Field, reduxForm } from 'redux-form'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

import validateDocument from './validations'
// import asyncValidate from './validations'

const renderTextField = props => (
  <TextField
    {...props.input}
    label={props.label}
    error={props.touched && props.error}
    helperText={props.touched && props.error ? props.error : null}
  />
)

const DocumentForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="name" component={renderTextField} label="First Name"/>
      </div>
      <div>
        <Button type="submit" disabled={pristine || submitting}>Submit</Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'document',
  validate: validateDocument,
  // asyncValidate
})(DocumentForm)
