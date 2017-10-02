import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

import withRoot from './withRoot'
import Layout from './Layout'
import DocumentList from './Ui/DocumentList'
import DocumentSingle from './Ui/DocumentSingle'
import {
  About,
  NotFound,
  Home
} from './Ui/Static'

const styles = theme => ({
  container: {
    padding: '40px',
  },
})

const App = ({ classes }) => (
  <div>
    <Layout>
      <div className={classes.container}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/documents" component={DocumentList}/>
          <Route exact path="/documents/:id" component={DocumentSingle}/>
          <Route exact path="/About" component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Layout>
  </div>
)

export default withRoot(withStyles(styles)(App))
