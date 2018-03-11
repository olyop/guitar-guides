import React from 'react'

import axios from 'axios'

import Loading from '../common/loading'

import './search.css'

class Search extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      input: '',
      database: {
        standardChords: null,
        chordChooser: null
      }
    }
    
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleInputChange(event) {
    this.setState({ input: event.target.value });
  }
  
  componentDidMount() {
    Promise.all([
      axios.get('http://localhost:3001/standardChords'),
      axios.get('http://localhost:3001/chordChooser')
    ])
    .then(([standardChordsResponse, chordChooserResponse]) => {
      this.setState({
        database: {
          standardChords: standardChordsResponse.data,
          chordChooser: chordChooserResponse.data
        }
      })
      // Set focus on search  input
      this.nameInput.focus()
    })
    .catch(error => console.log(error))
  }
  
  render() {
    const database = this.state.database
    return (
      <div id="search">
        <div className="container">
        
          {database.standardChords === null && database.chordChooser === null ? <Loading /> : (
            <div>
              
              <div className="search-top">
                <div className="search-top-icon">
                  <i className="material-icons">search</i>
                </div>
                <div className="search-top-bar">
                  
                  <input placeholder="Search..."
                    type="text"
                    value={this.state.input}
                    onChange={this.handleInputChange}
                    ref={(input) => { this.nameInput = input }} />
                  
                  <i className="material-icons">close</i>
                </div>
              </div>

              <div className="search-bottom">
                Search Results
              </div>
              
            </div>
          )}
        
        </div>
      </div>
    )
  }
}

export default Search