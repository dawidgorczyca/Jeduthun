import React from 'react'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      StringMain: '',
      StringOr: '',
      StringNot: '',
      VideoLength: '',
      VideoQuality: '',
      ResultsOrder: '',
      ResultsPerPage: ''
    }
  }
  // TODO:
  // 1.) Add all query options to the search
  // 2.) Validate search query before initializing action

  render() {
    return(
      <div className="search">
        <button onClick={this.props.searchQueryAction}>Test search</button>
      </div>
    )
  }
}

SearchContainer.propTypes = {
  searchParams: React.PropTypes.object
}

export default SearchContainer