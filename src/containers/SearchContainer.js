import React from 'react'
import BasicInputComponent from '../components/formInputs/BasicInput'
import { 
  youtubeSearchConfig,
  videoLengths, 
  videoQualities, 
  listOrdering,
  searchDefaults
} from '../statics/TypesAndDefaults'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = searchDefaults
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  prepareOptionsObj() {
    // This is dirty, to be improved
    let options = youtubeSearchConfig
    if (this.state.videoLength.length > 0) {
      options.videoDuration = this.state.videoLength
    }
    if (this.state.videoLength.length > 0) {
      options.videoDefinition = this.state.videoQuality
    }
    if (this.state.videoLength.length > 0) {
      options.maxResults = this.state.resultsPerPage
    }
    if (this.state.videoLength.length > 0) {
      options.order = this.state.resultsOrder
    }
    return options
  }
  handleSubmit(event){
    // TODO:
    // Validation
    event.preventDefault();
    const query = `${this.state.stringMain}|${this.state.stringOr} -${this.state.stringNot}` 
    const options = this.prepareOptionsObj()
    this.props.searchQueryAction(query, options)
  }
  render() {
    return(
      <div className="search">
        <form onSubmit={this.handleSubmit}>
          <div className="form-part">
            <h3>Search for</h3>
            <BasicInputComponent
              name="stringMain"
              type="text"
              value={this.state.stringMain}
              onChange={this.handleChange}
            />
            <BasicInputComponent
              name="stringOr"
              label="Or instead:"
              type="text"
              value={this.state.stringOr}
              onChange={this.handleChange}
              wrapperClass="form-part--split-horizontal"
            />
            <BasicInputComponent
              name="stringNot"
              label="Exclude if contains:"
              type="text"
              value={this.state.stringNot}
              onChange={this.handleChange}
              wrapperClass="form-part--split-horizontal"
            />
          </div>
          <div className="form-part">
            <h3>Video details</h3>
            <BasicInputComponent
              name="videoLength"
              label="Video length:"
              type="select"
              value={this.state.videoLength}
              onChange={this.handleChange}
              options={videoLengths}
              wrapperClass="form-part--split-horizontal"
            />
            <BasicInputComponent
              name="videoQuality"
              label="Video quality:"
              type="select"
              value={this.state.videoQuality}
              onChange={this.handleChange}
              options={videoQualities}
              wrapperClass="form-part--split-horizontal"
            />
          </div>
          <div className="form-part">
            <h3>Results view options</h3>
            <BasicInputComponent
              name="resultsOrder"
              label="View order:"
              type="select"
              value={this.state.resultsOrder}
              onChange={this.handleChange}
              options={listOrdering}
              wrapperClass="form-part--split-horizontal"
            />
            <BasicInputComponent
              name="resultsPerPage"
              label="Results per page:"
              type="text"
              value={this.state.resultsPerPage}
              onChange={this.handleChange}
              wrapperClass="form-part--split-horizontal"
            />
          </div>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

SearchContainer.propTypes = {
  searchParams: React.PropTypes.object
}

export default SearchContainer