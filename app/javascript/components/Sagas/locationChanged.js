import {put} from 'redux-saga/effects'

// console.log('saggg');
export function *locationChanged(action) {
  console.log(action.payload, 'aaad');
  // if (action.payload.pathname == '/') {
  //   const query = new URLSearchParams(action.payload.search)
  //   const pageNumber = Number(query.get('page')) || 1
  //   yield put({
  //     type: 'documents.FETCH_LIST',
  //     pageNumber: pageNumber,
  //     pageSize: 3
  //   })
  // }
}
