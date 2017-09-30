import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'

const styles = theme => ({
})

const Home = (props) => {
  const documentList = props.list || []
  return (
    <div>
      documenti
      <ul>
      {
        documentList.map(document => (
          <li key={document.id}>{document.name}</li>
        ))
      }
      </ul>

      page {props.pageNumber} of {props.pageCount} by {props.pageSize}
      <Link to={"?page=1"}>1</Link>
      <Link to={"?page=2"}>2</Link>
      <Link to={"?page=3"}>3</Link>
      <Link to={"?page=4"}>4</Link>
      <Link to={"?page=7"}>7</Link>
      <Link to={"?page=8"}>8</Link>
      <Link to={"?page=9"}>9</Link>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const documents = state.documents || {}
  return {
    list: documents.list || [],
    pageNumber: Number(documents.pageNumber) || 1,
    pageCount: documents.pageCount,
    pageSize: documents.pageSize,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Home))
