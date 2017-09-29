import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// # Appearance
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import '../styles/app'

// # App
import App from '../components/App'

const theme = createMuiTheme();

document.addEventListener('DOMContentLoaded', () => {

  // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})
