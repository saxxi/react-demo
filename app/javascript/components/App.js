import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Layout from './Layout'
import DocumentList from './DocumentList'
import {
  About,
  NotFound
} from './Ui/Static'

const App = () => (
  <div>
    <Layout>
      <Switch>
        <Route exact path="/" component={DocumentList}/>
        <Route exact path="/About" component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </Layout>
  </div>
)

export default App
