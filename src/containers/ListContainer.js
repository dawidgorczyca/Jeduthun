import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import bindIndexToActionCreators from '../store/bindIndexToActionCreators'
import { addAlbumAction, searchQueryAction, loadResultsPageAction } from '../store/appReducer'
import { playAlbumAction,
         stopAlbumAction,
         downloadAlbumAction,
         saveAlbumAction } from '../store/albumReducer'
import AlbumContainer from '../components/AlbumComponent'
import SearchContainer from './SearchContainer'

class ListContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch(query, options) {
    this.props.dispatch(searchQueryAction(query, options))
  }
  handlePageLoad(query, options, pageToken) {
    this.props.dispatch(loadResultsPageAction(query, options, pageToken))
  }
  // TODO: Paginate the results visible
  render() { return(
    <div className='container'>
      <SearchContainer 
        searchQueryAction={this.handleSearch}
        nextPageToken={this.props.listConfiguration.nextPageToken}
        prevPageToken={this.props.listConfiguration.prevPageToken}
      />

      {this.props.albums.map((value, index) => 
        <AlbumContainer album={value} key={index}
          {...albumDispatchProperties(index)(this.props.dispatch)}/>
      )}
    </div>
  )}
}

const mapStateToProps = state => ({
  albums: state.albums,
  listConfiguration: state.listConfiguration
})

const albumDispatchProperties =
  index =>
    dispatch => bindActionCreators(
        bindIndexToActionCreators({
          playAlbumAction,
          stopAlbumAction,
          downloadAlbumAction,
          saveAlbumAction
        }, index),
      dispatch)

export default connect(mapStateToProps)(ListContainer)