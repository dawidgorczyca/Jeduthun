import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import bindIndexToActionCreators from '../store/bindIndexToActionCreators'
import { addAlbumAction, searchQueryAction } from '../store/listReducer'
import { playAlbumAction,
         stopAlbumAction,
         downloadAlbumAction,
         saveAlbumAction } from '../store/albumReducer'
import AlbumContainer from './albumContainer'

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

const mapDispatchToProps = dispatch => ({
  addAlbumAction() {
    dispatch(addAlbumAction())
  },
  searchQueryAction() {
    dispatch(searchQueryAction('deadmau5'))
  }
})

const ListContainer = props =>
  <div className='container'>
    <button onClick={props.searchQueryAction}>Test search</button>

    {props.albums.map((value, index) =>
      <AlbumContainer album={value} key={index}
        {...albumDispatchProperties(index)(props.dispatch)}/>
    )}
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)