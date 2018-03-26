import React from 'react'

import axios from 'axios'
import includes from 'lodash/includes'
import maliciousSubStrings from '../database/malicious-sub-strings'

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
    .then(([standardChordsResponse, chordChooserResponse]) => {
      this.setState({
        database: {
          standardChords: standardChordsResponse.data,
          chordChooser: chordChooserResponse.data
        }
      })
      // Set focus on search input
      this.nameInput.focus()
    })
    .catch(error => {
			console.log(error)
			this.setState({ database: 'error' })
		})
  }
	
  handleInputChange(event) {
		// Check for malicious code
		let flag = false
		for (let i = 0; i < maliciousSubStrings.length; i++) {
			if (includes(this.state.input, maliciousSubStrings[i])) { flag = true }
		}
		if (flag) {
			this.setState({ input: 'malicious' })
		} else {
			this.setState({ input: event.target.value })
		}
	}
	clearSearch() { this.setState({ input: '' }) }

	
  render() {
    const database = this.state.database
		console.log(this.state.input)
		let content
		if (database === 'error') {
			content = <Error error={database} />
		} else if (database.standardChords === null && database.chordChooser === null) {
			content = <Loading text="Loading Database" />
		} else {
			let style = {
				position: 'absolute',
				borderRadius: '100%',
				margin: '10px 0 0 0',
				minWidth: 'auto',
				padding: '5px',
				right: 0
			}
			// Search results
			let searchResults
			if (this.state.input === 'malicious') {
				searchResults = <p>Search input is potentially malicious.</p>
			} else if (this.state.input === '') {
				searchResults = null 
			} else {
				searchResults = <SearchResults searchState={this.state} />				 
			}
			content = (
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
								ref={input => { this.nameInput = input }} />
							<FlatButton onClick={this.clearSearch}
								style={style}>
								<i className="material-icons">close</i>
							</FlatButton>
						</div>
					</div>
					
					{searchResults}
					
				</div>
			)
		}
    return (
      <div id="search">
        <div className="container">
					{content}
        </div>
      </div>
    )
  }
}

export default Search