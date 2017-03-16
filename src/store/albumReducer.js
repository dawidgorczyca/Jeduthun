import { albumObject } from './../statics/TypesAndDefaults'
import update from 'immutability-helper'

// TODO:
// 1.) Modify according to recieved data for album
// 2.) Work through every function to make it really work

const PLAY_ALBUM = 'albums/PLAY_ALBUM'
const STOP_ALBUM = 'albums/STOP_ALBUM'
const DOWNLOAD_ALBUM = 'albums/DOWNLOAD_ALBUM'
const SAVE_ALBUM = 'albums/SAVE_ALBUM'

export const playAlbumAction = (album) => ({
  type: PLAY_ALBUM,
  album
})
export const stopAlbumAction = (album) => ({
  type: STOP_ALBUM,
  album
})
export const downloadAlbumAction = (album) => ({
  type: DOWNLOAD_ALBUM,
  album
})
export const saveAlbumAction = (album) => ({
  type: SAVE_ALBUM,
  album
})

const reducer = (state = {}, action) => {
  switch(action.type) {
    case PLAY_ALBUM:
      return update(state, {$merge: {added: true}})
    case STOP_ALBUM:
      state = update(state, { album: action.album })
      break
    case DOWNLOAD_ALBUM:
      state = update(state, { album: action.album })
      break
    case SAVE_ALBUM:
      state = update(state, { album: action.album })
      break
    default:
      return state
  }
}

export default reducer