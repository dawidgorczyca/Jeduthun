import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import bindIndexToActionCreators from '../store/bindIndexToActionCreators'
import { addAlbumAction, searchQueryAction } from '../store/appReducer'
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
  render() { return(
    <div className='container'>
      <SearchContainer searchQueryAction={this.handleSearch}/>

      {this.props.albums.map((value, index) => 
        <AlbumContainer album={value} key={index}
          {...albumDispatchProperties(index)(this.props.dispatch)}/>
      )}
    </div>
  )}
}

const mapStateToProps = state => ({
  albums: state
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