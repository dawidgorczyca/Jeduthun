import React from 'react'

const AlbumContainer = props =>
  <div className="album">
    Album
    <button onClick={props.playAlbumAction}>Play</button>
  </div>

export default AlbumContainer