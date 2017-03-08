import React from 'react'

class AlbumContainer extends React.Component {
  constructor(props) {
    super(props)
    this.playAlbum = this.playAlbum.bind(this)
  }

  playAlbum() {
    this.props.playAlbumAction()
  }

  render() {
    return(
      <div className="album">
        Album
        <button onClick={this.playAlbum}>Play</button>
      </div>
    )
  }
}

AlbumContainer.propTypes = {
  album: React.PropTypes.object
}

export default AlbumContainer