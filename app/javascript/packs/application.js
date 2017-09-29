import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import '../styles/app'

document.addEventListener('DOMContentLoaded', () => {

  // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content')

  ReactDOM.render(
    <div>
      ciao!
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
