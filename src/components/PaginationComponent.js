import React from 'react'

const PaginationComponent = props =>
  <div className="pagination">
    <button onClick={props.playAlbumAction}>NextPage</button>
  </div>

export default PaginationComponent