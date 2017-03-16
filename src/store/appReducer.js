import albumReducer from './albumReducer'
import { albumObject } from './../statics/TypesAndDefaults'
import searchYoutube from 'youtube-search'
import update from 'immutability-helper';

// TODO:
// Add pagination to results

const SEARCH_QUERY = 'SEARCH_QUERY'
const ADD_ALBUM = 'ADD_ALBUM'
const CLEAR_LIST = 'CLEAR_LIST'

function prepareAlbum(object) {
  return {
    cover: object.thumbnails.high,
    id: object.id,
    title: object.title,
    description: object.description,
    link: object.link
  }
}

export const addAlbumAction = (album) => ({
  type: ADD_ALBUM,
  album
})

export const clearListAction = () => ({
  type: CLEAR_LIST
})

export function searchQueryAction (query, options) {
  return dispatch => {
    // dispatch(clearListAction())
    searchYoutube(query, options, function(err, results, pageInfo){
      if(err) return console.log(err)
      console.log(results)
      console.log(pageInfo)
      results.forEach(function (item, i) {
        dispatch(addAlbumAction(item))
      })
    })
  }
}

export const INITIAL_STATE = {
  albums: [],
  listConfiguration: {},
}

const reducer = (state = INITIAL_STATE, action) => {
  if(action.type.startsWith('albums/')) {
    return [
      ...state.albums.slice(0, action.index),
      albumReducer(state.albums[action.index], action),
      ...state.albums.slice(action.index + 1)
    ]
  }
  switch (action.type) {
    case ADD_ALBUM:
      return update(state, {
        albums: {$push: [prepareAlbum(action.album)]}
      })
    case SEARCH_QUERY:
      return {
        ...state
      }
    case CLEAR_LIST:
      return INITIAL_STATE
    default:
      return {
        ...state
      }
  }
}

export default reducer