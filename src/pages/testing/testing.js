import React from 'react'

import axios from 'axios'
import transferChordsIntoArray from '../../functions/transfer-chords-into-array'
import checkDuplicates from '../../functions/check-duplicates'

import './testing.css'

import Title from '../../common/title'
import Heading from '../../common/heading'
import Loading from '../../common/loading'
import RaisedButton from 'material-ui/RaisedButton'

class DatabaseTesting extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			database: { chords: null },
			showTests: {
				test1: false
			}
		}
		this.toggleTest1 = this.toggleTest1.bind(this)
	}
	
	componentDidMount() {
		axios({
			method: 'get',
			url: 'http://localhost:3001/chordChooser'
		})
		.then(response => {
			this.setState({
				database: { chords: response.data }
			})
		})
		.catch(error => {
			this.setState({ database: { chords: 'error' } })
		})
	}
	
	toggleTest1() { this.setState({ showTests: { test1: !this.state.showTests.test1 } }) }
	
	render() {
		let arrayDuplicates = this.state.database.chords === null ? null : checkDuplicates(transferChordsIntoArray(this.state.database.chords))
		return (
			<div>
				{this.state.database.chords === null ? (
					<Loading />
				) : (
					<div>
						<div className="testing-test">
							<h1>Test/Validate Chords Database</h1>
							<RaisedButton label={this.state.showTests.test1 ? 'Hide Test Results' : 'Run Test'}
								onClick={this.toggleTest1} />
							{this.state.showTests.test1 ? (
								<div className="testing-results">
									<p>{arrayDuplicates.length === 0 ? 'No duplicates found' : 'Duplicates found: ' + String(arrayDuplicates)}</p>
								</div>
							) : null}
						</div>
					</div>
				)}
			</div>
		)
	}
}

class Testing extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = { content1: true }
		this.toggleContent1 = this.toggleContent1.bind(this)
	}
	
	toggleContent1() { this.setState({ content1: !this.state.content1 }) }
	
	render() {
		return (
			<div id="testing">
				<div className="container">
					
					<Title>Testing</Title>
					
					<Heading onClick={this.toggleContent1}
						active={this.state.content1}
						>Database Testing</Heading>
					{this.state.content1 ? <DatabaseTesting /> : null}
				
				</div>
			</div>
		)
	}
}

export default Testing