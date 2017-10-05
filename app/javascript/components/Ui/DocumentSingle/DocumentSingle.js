import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

import DocumentForm from './DocumentForm'
import documentActions from '../../Actions/documentActions'

const styles = theme => ({
  root: {
    width: '100%',
    padding: theme.spacing.unit * 3,
  },
})

class DocumentSingle extends Component {
  state = {}

  componentWillMount() {
    this.props.fetchDocument(this.props.match.params.id)
  }

  handleSubmit = (document) => {
    this.props.submitForm(document)
  }

  render() {
    const { document = {}, classes } = this.props
    return (
      <Paper className={classes.root}>
        <div>
          <h1>Document Single</h1>
          {
            (this.props.match.params.id == 'new' || document.id) ? (
                <DocumentForm
                  initialValues={this.props.document}
                  onSubmit={this.handleSubmit.bind(this)} />
            ) : (
              <p>Could not find selected document.</p>
            )
          }
        </div>
      </Paper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    document: state.document,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchDocument: (documentId) => {
      if (documentId && documentId != 'new') {
        dispatch(documentActions.fetchSingle(documentId))
      }
    },
    submitForm: (document) => {
      dispatch(documentActions.saveSingle(document))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DocumentSingle))
