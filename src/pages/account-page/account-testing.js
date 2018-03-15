import React from 'react'

import axios from 'axios'
import transferChordsIntoArray from '../../functions/transfer-chords-into-array'
import checkDuplicates from '../../functions/check-duplicates'

import Loading from '../../common/loading'

class AccountTesting extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			database: {
				chordChooser: null
			}
		}
	}
	
	componentDidMount() {
		axios({
			method: 'get',
			url: 'http://localhost:3001/chordChooser'
		})
		.then(response => this.setState({ database: { chordChooser: response.data } }))
		.catch(error => {
			console.log(error)
			this.setState({ database: { chordChooser: 'error' } })
		})
	}
	
	render() {
		let arrayDuplicates = null
		if (this.state.database.chordChooser !== null) {
			arrayDuplicates = checkDuplicates(transferChordsIntoArray(this.state.database.chordChooser))
		}
		return (
			<div className="account-page-content account-page-testing">
				{this.state.database.chordChooser === null ? (
					<Loading />
				) : (
				
					<div className="account-page-testing-test">
						<p>{arrayDuplicates.length === 0 ? 'No duplicates found' : 'Duplicates found: ' + String(arrayDuplicates)}</p>
					</div>
				
				)}
			</div>
		)
	}
}

export default AccountTesting