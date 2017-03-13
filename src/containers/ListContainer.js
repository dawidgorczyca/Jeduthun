import React from 'react'
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
  },
  dispatch
})

const ListContainer = props =>
  <div className='container'>
    <SearchContainer searchQueryAction={props.searchQueryAction}/>

    {props.albums.map((value, index) => 
      <AlbumContainer album={value} key={index}
        {...albumDispatchProperties(index)(props.dispatch)}/>
    )}
  </div>

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)