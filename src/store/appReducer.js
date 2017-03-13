import albumReducer from './albumReducer'
import { albumObject } from './../statics/TypesAndDefaults'
import searchYoutube from 'youtube-search'

const SEARCH_QUERY = 'SEARCH_QUERY'
const ADD_ALBUM = 'albums/ADD_ALBUM'

export const addAlbumAction = (album) => ({
  type: ADD_ALBUM,
  album
})

export function searchQueryAction (query, options) {
  return dispatch => {
    searchYoutube(query, options, function(err, results){
      console.log(results)
      if(err) return console.log(err)
      dispatch(addAlbumAction(results))
    })
  }
}

export const INITIAL_STATE = [albumObject,albumObject]

const reducer = (state = INITIAL_STATE, action) => {
  if(action.type.startsWith('albums/')) {
    return [
      ...state.slice(0, action.index),
      albumReducer(state[action.index], action),
      ...state.slice(action.index + 1)
    ]
  }
  switch (action.type) {
    case ADD_ALBUM:
      return [
        ...state,
        []
      ]
    case SEARCH_QUERY:
      // TODO:
      // 1.) Make request
      // 2.) Throw results and initialize ADD_ALBUM action for each
      // THEN:
      // 3.) Add pagination to the store (?)
      return [
        ...state
      ]
    default:
      return [
        ...state
      ]
  }
}

export default reducer