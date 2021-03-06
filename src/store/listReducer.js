import albumReducer from './albumReducer'
import { albumObject } from './../statics/TypesAndDefaults'
import searchYoutube from 'youtube-search'
const searchConfig = {
  maxResults: 10,
  key: 'AIzaSyDSYCcZfNICbkuweKxnrpCLTse_nO_FFgA'
}

const SEARCH_QUERY = 'SEARCH_QUERY'
const ADD_ALBUM = 'albums/ADD_ALBUM'

export const addAlbumAction = () => ({
  type: ADD_ALBUM
})

export const searchQueryAction = (query) => ({
  type: SEARCH_QUERY,
  query
})

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
      searchYoutube(action.query, searchConfig, function(err, results) {
        if(err) return console.log(err);
        console.dir(results);
      });
      return [
        ...state,
        []
      ]
    default:
      return [
        ...state
      ]
  }
}

export default reducer