import React, { Component } from 'react'
import { connect } from 'react-redux'

import DocumentList from './DocumentList'

class Home extends Component {

  componentWillMount() {
    console.log('ss2233');
  //   this.props.dispatch({
  //     type: 'documents.FETCH_LIST_SUCCESS',
  //     documents: {
  //       "meta": {
  //         "page_count": 3,
  //         "page_number": 2,
  //       },
  //       "list": [
  //         { "id": "0e96de55-93af-459b-938b-5664b699cafa", "name": "good-doc" },
  //         { "id": "3c49fe1e-6524-4657-93cb-291e742f9721", "name": "better-doc" },
  //         { "id": "b5cca50b-0693-4c4a-bafb-29144434255e", "name": "todays-happyness" },
  //         { "id": "271567de-0372-4505-8410-c8c1d358b0e9", "name": "we-need-more-of-this" },
  //         { "id": "430d4efb-892e-4735-b22e-e09ae163fb6b", "name": "keep-doing" },
  //         { "id": "1e5441b5-81e2-43a5-87c2-392c71157287", "name": "just-another-doc" },
  //         { "id": "52d26a2b-e31e-42e5-bcac-600f1083b819", "name": "the-worst-one" },
  //         { "id": "6a14de93-accb-4fc2-9eee-7fa16532a9c0", "name": "red-doc" },
  //         { "id": "6ab4759a-6601-4241-a98a-1d023c5084c7", "name": "blue-doc" },
  //         { "id": "f4193e0b-9385-486c-8e9a-f3ed208f03b4", "name": "final-doc-final-version-2" }
  //       ]
  //     }
  //   })
  }

  render() {
    return (
      <div>
        <DocumentList list={this.props.list || []} />
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const documents = state.documents || {}
  return {
    list: documents.list || [],
    // pageNumber: Number(pageNumberInString) || 1,
    // pageCount: state.campaigns.pageCount,
  }
}

export default connect(mapStateToProps)(Home)
