import React from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
})

const DocumentSingle = ({ match, classes }) => {
  return (
    <Paper className={classes.root}>
      <h1>Document Single</h1>
      <p>{match.params.id}</p>
    </Paper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(null, mapDispatchToProps)(withStyles(styles)(DocumentSingle))
