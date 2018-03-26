import React from 'react'

import axios from 'axios'
import includes from 'lodash/includes'
import maliciousSubStrings from '../database/malicious-sub-strings'
import transferChordsIntoArray from '../functions/transfer-chords-into-array'

import Error from '../common/error'
import Loading from '../common/loading'
import FlatButton from 'material-ui/FlatButton'
import SearchResults from './search-results'

import './search.css'

class Search extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      isInputMalicious: false,
      database: {
        standardChords: null,
        chordChooser: null
      }
    }
    this.handleInputChange = this.handleInputChange.bind(this)
		this.clearSearch = this.clearSearch.bind(this)
  }
  
  componentDidMount() {
    Promise.all([
      axios.get('http://localhost:3001/standardChords'),
      axios.get('http://localhost:3001/chordChooser')
    ])
    .then(([response1, response2]) => {
      this.setState({
        database: {
          standardChords: response1.data,
          chordChooser: transferChordsIntoArray(response2.data)
        }
      })
      // Set focus on search input
      this.nameInput.focus()
    })
    .catch(error => { this.setState({ database: 'error' }) })
  }
	
  handleInputChange(event) {
		// Check for potentially malicious input
    const input = event.target.value
		let flag = false
		for (let i = 0; i < maliciousSubStrings.length; i++) {
			if (includes(input, maliciousSubStrings[i])) { flag = true }
		}
    this.setState({
      input: input,
      isInputMalicious: flag
    })
	}
	clearSearch() { this.setState({ input: '' }) }
	
  render() {
		if (this.state.database === 'error') {
			return (
        <div id="search">
          <div className="container">
            <Error error={this.state.database} />
          </div>
        </div>
      )
		} else if (this.state.database.standardChords === null && this.state.database.chordChooser === null) {
			return (
        <div id="search">
          <div className="container">
            <Loading text="Loading Database" />
          </div>
        </div>
      )
		} else {
			let style = {
				position: 'absolute',
				borderRadius: '100%',
				margin: '10px 0 0 0',
				minWidth: 'auto',
				padding: '5px',
				right: 0
			}
			return (
				<div id="search">
          <div className="container">
          
            <div className="search-top">
              <div className="search-top-icon">
                <i className="material-icons">search</i>
              </div>
              <div className="search-top-bar">
                <input placeholder="Search..."
                  type="text"
                  value={this.state.input}
                  onChange={this.handleInputChange}
                  ref={input => { this.nameInput = input }} />
                <FlatButton onClick={this.clearSearch}
                  style={style}>
                  <i className="material-icons">close</i>
                </FlatButton>
              </div>
            </div>

            <SearchResults input={this.state.input}
              isInputMalicious={this.state.isInputMalicious}
              database={this.state.database} />
          
          </div>
				</div>
			)
		}
  }
}

export default Search