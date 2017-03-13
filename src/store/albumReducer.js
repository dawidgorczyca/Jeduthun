import { albumObject } from './../statics/TypesAndDefaults'
import ytSearch from 'youtube-search'

const update = (state, mutations) =>
  Object.assign({}, state, mutations)

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

export const INITIAL_STATE = albumObject

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case PLAY_ALBUM:
      state = update(state, { album: action.album })
      break
    case STOP_ALBUM:
      state = update(state, { album: action.album })
      break
    case DOWNLOAD_ALBUM:
      state = update(state, { album: action.album })
      break
    case SAVE_ALBUM:
      state = update(state, { album: action.album })
      break
  }
}

export default reducer