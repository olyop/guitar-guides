import React from 'react'

import axios from 'axios'

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
  
  handleInputChange(event) { this.setState({ input: event.target.value }) }
	clearSearch() { this.setState({ input: '' }) }
  
  componentDidMount() {
    Promise.all([
      axios.get('http://localhost:3001/standardChords'),
      axios.get('http://localhost:3001/chordChooserr')
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
	
  render() {
    const database = this.state.database
		let content
		if (database === 'error') {
			content = <Error error={database} />
		} else if (database.standardChords === null && database.chordChooser === null) {
			content = <Loading text="Loading Database" />
		} else {
			let style = {
				position: 'absolute',
				right: 0,
				borderRadius: '100%',
				minWidth: 'auto',
				padding: '5px',
				margin: '10px 0 0 0'
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
					{this.state.input === '' ? null : (
						<SearchResults searchState={this.state} />
					)}
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