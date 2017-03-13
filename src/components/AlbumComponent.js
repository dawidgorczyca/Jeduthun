import React from 'react'

const AlbumComponent = props =>
  <div className="album">
    Album
    <button onClick={props.playAlbumAction}>Play</button>
  </div>

export default AlbumComponent