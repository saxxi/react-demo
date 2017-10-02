import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

// # Appearance
const theme = createMuiTheme()
import '../styles/app'

// # App
import App from '../components/App'
import { storeFactory } from '../components/Store'
const { store, history } = storeFactory()

document.addEventListener('DOMContentLoaded', () => {

  // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    </MuiThemeProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})
