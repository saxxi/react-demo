import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'
import Table, {
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TablePagination,
} from 'material-ui/Table'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'

import DocumentRow from './DocumentRow'
import documentActions from '../../Actions/documentActions'

const styles = theme => ({
  root: {
    width: '100%',
    padding: theme.spacing.unit * 3,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
})

const DocumentList = ({ classes, list,
    pageNumber, totalCount, pageSize,
    selectRow, deleteRow, handleChangePage }) => {
  return (
    <Paper className={classes.root}>
      <Button
        to={'/documents/new'}
        component={props => <Link {...props}/>}>Add</Button>
      {
        (list.length === 0) ?
        (
          <p>No results found</p>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell key={"code"}>Code</TableCell>
                <TableCell key={"name"}>Document name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                list.map(document => (
                  <DocumentRow key={document.id}
                    selectRow={selectRow}
                    deleteRow={deleteRow}
                    document={document} />
                ))
              }
            </TableBody>
            <TableFooter>
              <TablePagination
                count={totalCount}
                rowsPerPage={pageSize}
                rowsPerPageOptions={[pageSize]}
                page={pageNumber}
                onChangePage={handleChangePage}
              />
            </TableFooter>
          </Table>
        )
      }
    </Paper>
  )
}

const mapStateToProps = (state, ownProps) => {
  const documents = state.documents || {}
  return {
    list: documents.list || [],
    pageNumber: Number(documents.pageNumber) || 1,
    totalCount: documents.totalCount,
    pageSize: documents.pageSize,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangePage: (evt, page) => {
      dispatch(push(`?page=${page}`))
    },
    selectRow: (evt, documentId) => {
      dispatch(push(`/documents/${documentId}`))
    },
    deleteRow: (evt, documentId) => {
      dispatch(documentActions.destroySingle(documentId))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DocumentList))
