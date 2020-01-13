/* jshint ignore:start */
import React, { Component } from 'react';
import './Searcher.css'

class Searcher extends Component {
  render(){
    return (
      <React.Fragment>
        <spam><i className="fas fa-search"></i><input type="text" placeholder={this.props.title} className="searcher"/></spam>
      </React.Fragment>
    );  
  }
}

export default Searcher;