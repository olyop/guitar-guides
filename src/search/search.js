import React from 'react'

import './search.css'

class Search extends React.Component {
  render() {
    return (
      <div id="search">
        <div className="container">
        
          <div className="search-top">
            <div className="search-top-icon">
              <i className="material-icons">search</i>
            </div>
            <div className="search-top-bar">
              <input placeholder="Search..."></input>
              <i className="material-icons">close</i>
            </div>
          </div>
          
          <div className="search-bottom">
            Search Results
          </div>
        
        </div>
      </div>
    )
  }
}

export default Search