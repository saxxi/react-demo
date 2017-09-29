import React from 'react'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({

})

const DocumentList = (props) => {
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
    </div>
  )
}

export default withStyles(styles)(DocumentList)
