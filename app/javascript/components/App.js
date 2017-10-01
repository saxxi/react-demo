import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Layout from './Layout'
import DocumentList from './Ui/DocumentList'
import DocumentSingle from './Ui/DocumentSingle'
import {
  About,
  NotFound
} from './Ui/Static'

const App = () => (
  <div>
    <Layout>
      <Switch>
        <Route exact path="/" component={DocumentList}/>
        <Route exact path="/documents/:id" component={DocumentSingle}/>
        <Route exact path="/About" component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </div>
)

export default App
