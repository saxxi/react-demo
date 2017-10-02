import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'

class Login extends Component {
  state = {
    open: false,
  }

  constructor() {
    super()
    this.submitLoginPrepare = this.submitLoginPrepare.bind(this)
    this.nonAuthenticated = this.nonAuthenticated.bind(this)
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  submitLoginPrepare = (evt) => {
    evt.preventDefault()
    const email = this.state.email
    const password = this.state.password
    this.props.submitLogin(email, password)
  }

  nonAuthenticated() {
    return (
      <form>
        <Button onClick={this.handleClickOpen} color="contrast">Login</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <form onSubmit={this.submitLoginPrepare}>
            <DialogTitle>Please login to continue</DialogTitle>
            <DialogContent>
              <div>
                <TextField name="email"
                  fullWidth={true}
                  label="E-mail"
                  onChange={(evt) => this.setState({ email: evt.target.value })} />
              </div>
              <div>
                <TextField name="password"
                  fullWidth={true}
                  label="Password"
                  onChange={(evt) => this.setState({ password: evt.target.value })} />
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleRequestClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Login
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </form>
    )
  }

  render() {
    return (
      <div>
        {
          (false) ? (
            <div>
              <Button color="contrast">Logout</Button>
            </div>
          ) : this.nonAuthenticated()
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    some: true
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitLogin: (email, password) => {
      dispatch({
        type: 'login.FORM_SUBMITTED',
        user: {
          email: email,
          password: password,
        }
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
