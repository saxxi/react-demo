import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import Button from 'material-ui/Button'

import LoginForm from './LoginForm'

class Login extends Component {
  state = {
    open: false,
  }

  constructor() {
    super()
    this.nonAuthenticated = this.nonAuthenticated.bind(this)
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  handleSubmit = (data) => {
    const { email, password } = data
    this.props.submitLogin(email, password)
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps, 'componentWillReceiveProps');
    if (newProps.open === false) {
      this.setState({ open: false })
    }
  }

  nonAuthenticated() {
    return (
      <div>
        <Button onClick={this.handleClickOpen} color="contrast">Login</Button>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <LoginForm
            initialValues={this.props.document}
            onCloseDialog={this.handleRequestClose.bind(this)}
            onSubmit={this.handleSubmit.bind(this)} />
        </Dialog>
      </div>
    )
  }

  render() {
    return (
      <div>
        {
          (this.props.isLoggedIn) ? (
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
  const { user = {} } = state
  return {
    open: user.loginSuccess !== true,
    isLoggedIn: user.loginSuccess === true,
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
