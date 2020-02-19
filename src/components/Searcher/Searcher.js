/* jshint ignore:start */
import React, { Component } from 'react';
import './Searcher.css'

class Searcher extends Component {

  state = {
    search: ""
  }

  handleSearch = (evt) => {
    this.setState({ search: evt.target.value })
    this.props.getSearch(this.state.search)
  }

  render() {
    return (
      <React.Fragment>
        <spam className="search">
          <i className="fas fa-search ico_search"></i>
          <input type="text" placeholder={this.props.title} onChange={this.handleSearch} className="searcher" />
        </spam>
      </React.Fragment>
    );
  }
}

export default Searcher;
