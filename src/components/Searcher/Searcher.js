/* jshint ignore:start */
import React, { Component } from 'react';
import './Searcher.css'

class Searcher extends Component {
  render() {
    return (
      <React.Fragment>
        <spam className="search">
          <i className="fas fa-search ico_search"></i>
          <input type="text" placeholder={this.props.title} className="searcher" />
        </spam>
      </React.Fragment>
    );
  }
}

export default Searcher;
