import albumReducer from './albumReducer'
import { albumObject } from './../statics/TypesAndDefaults'

const SEARCH_QUERY = 'SEARCH_QUERY'
const ADD_ALBUM = 'albums/ADD_ALBUM'

export const addAlbumAction = () => ({
  type: ADD_ALBUM
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