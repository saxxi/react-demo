import React from 'react'
import PropTypes from 'prop-types'

import { TableRow, TableCell } from 'material-ui/Table'
import DeleteIcon from 'material-ui-icons/Delete'

const DocumentRow = ({ document, selectRow, deleteRow }) => (
  <TableRow
    hover
    tabIndex={-1}
    key={document.id}
  >
    <TableCell
      onClick={e => selectRow(e, document.id)}
      >{document.code}</TableCell>
    <TableCell
      onClick={e => selectRow(e, document.id)}
      >{document.name}</TableCell>
    <TableCell>
      <DeleteIcon
        onClick={e => deleteRow(e, document.id)} />
    </TableCell>
  </TableRow>
)

DocumentRow.propTypes = {
  document: PropTypes.shape({
    id: PropTypes.string.required,
    code: PropTypes.string.required
  }),
  selectRow: PropTypes.func,
  deleteRow: PropTypes.func,
}

DocumentRow.defaultProps = {
  document: {},
  selectRow: (fn) => null,
  deleteRow: (fn) => null,
}

export default DocumentRow
