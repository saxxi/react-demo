import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
})

class DocumentSingle extends Component {

  componentWillMount() {
    this.props.dispatch({
      type: 'document.FETCH_DOCUMENT',
      documentId: this.props.match.params.id,
    });
  }

  render() {
    const { document = {}, classes } = this.props
    return (
      <Paper className={classes.root}>
        {
          (document.id) ? (
            <div>
              <h1>Document Single</h1>
              <p>{document.id}</p>
              <p>{document.name}</p>
            </div>
          ) : (
            <p>Could not find selected document.</p>
          )
        }
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  return {
    document: state.document,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(DocumentSingle))
