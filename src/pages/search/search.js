import React from 'react'

import axios from 'axios'
import includes from 'lodash/includes'
import maliciousSubStrings from '../../database/malicious-sub-strings'
import transfer3dimensional from '../../functions/transfer-3dimensional'

import FlatButton from 'material-ui/FlatButton'
import Error from '../../common/error'
import Container from '../../common/container'
import Loading from '../../common/loading'
import SearchResults from './search-results'

import './search.css'

class Search extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      isInputMalicious: false,
      database: null,
			databaseError: null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
		this.clearSearch = this.clearSearch.bind(this)
  }
  
  componentDidMount() {
    Promise.all([
      axios.get(`${this.props.globalText.api.url}/standardChords`),
      axios.get(`${this.props.globalText.api.url}/chordChooser`),
			axios.get(`${this.props.globalText.api.url}/scales`),
      axios.get(`${this.props.globalText.api.url}/riffs`)
    ])
    .then(([response1, response2, response3, response4]) => {
			const database = {
				standardChords: response1.data,
				chordChooser: transfer3dimensional(response2.data),
				scales: transfer3dimensional(response3.data),
        riffs: response4.data
			}
      this.setState(
				{ database },
				() => { this.nameInput.focus() }
			)
    })
    .catch(error => {
			this.setState({
				database: 'error',
				databaseError: error
			})
		})
  }
	
  handleInputChange(event) {
		// Check for potentially malicious input
    const input = String(event.target.value.toLowerCase())
		let flag = false
		for (let i = 0; i < maliciousSubStrings.length; i++) {
			if (includes(input, maliciousSubStrings[i])) { flag = true }
		}
    this.setState({
      input: input.toLowerCase(),
      isInputMalicious: flag
    })
	}
	
	clearSearch() {
    this.setState({ input: '' }) }
	
  render() {
		if (this.state.database === 'error') {
			const error = this.state.databaseError
			if (error.response) {
				return (
					<Container id="search" className="page">
						<Error heading={`Error - ${error.response.status} ${error.response.statusText}`}
							apiError={error} />
					</Container>
				)
			} else if (error.request) {
				return (
					<Container id="search" className="page">
						<Error heading="Error Server Request"
							subtitle="Error requesting data from API server." />
					</Container>
				)
			} else {
				return (
					<Container id="search" className="page">
						<Error heading="Unknown Error"
							subtitle="Error cause unknown" />
					</Container>
				)
			}
		} else if (this.state.database === null) {
			return (
        <Container id="search" className="page">
					<Loading text="Loading Database" />
        </Container>
      )
		} else {
			let buttonStyle = {
				position: 'absolute',
				borderRadius: '100%',
				margin: '10px 10px 0 0',
				minWidth: 'auto',
				padding: '5px',
				right: 0
			}
			return (
				<Container id="search" className="page">
					
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
								style={buttonStyle}>
								<i className="material-icons">close</i>
							</FlatButton>
						</div>
					</div>

					<SearchResults appState={this.props.appState}
						globalText={this.props.globalText}
						updateProgressChords={this.props.updateProgressChords}
						updateProgressChordsLoading={this.props.updateProgressChordsLoading} 
						input={this.state.input.trim()}
						isInputMalicious={this.state.isInputMalicious}
						database={this.state.database} />
					
				</Container>
			)
		}
  }
}

export default Search