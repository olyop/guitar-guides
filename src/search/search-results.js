import React from 'react'

import includes from 'lodash/includes'

import Heading from '../common/heading'
import ChordChart from '../common/chord-chart'
import FlatButton from 'material-ui/FlatButton'

import './search-results.css'

class ChordSearchResults extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			content: true,
			more: false
		}
		
		this.handleMore = this.handleMore.bind(this)
		this.handleContent = this.handleContent.bind(this)
	}
	
	handleMore() { this.setState({ more: !this.state.more }) }
	handleContent() { this.setState({ content: !this.state.content }) }
	
	render() {
		return (
			<div>
				<Heading onClick={this.handleContent}
					active={this.state.content}>Chord Matches</Heading>
				{this.state.content ? (
					<div>
						{this.state.more ? (
							<div className="search-results-chords">
								{this.props.chordMatches.map((chord, index) => (
									<ChordChart key={chord.id} chord={chord} /> 
								))}
							</div>
						) : (
							<div className="search-results-chords">
								{this.props.chordMatches.slice(0,5).map((chord, index) => (
									<ChordChart key={chord.id} chord={chord} /> 
								))}
							</div>
						)}
						<FlatButton label={this.state.more ? 'Less...' : 'More...'} onClick={this.handleMore} />
					</div>
				) : null}
			</div>
		)
	}
}

class SearchResults extends React.Component {
	render() {
		
		const query = this.props.searchState.input
		const database = this.props.searchState.database
		
		// transfer chord database into single array
		let chordsArray = []
		for (let a = 0; a < database.chordChooser.length; a++) {
			for (let b = 0; b < database.chordChooser[a].length; b++) {
				for (let c = 0; c < database.chordChooser[a][b].length; c++) {
					chordsArray.push(database.chordChooser[a][b][c])
				}
			}
		}
		
		// find chords that match the search query
		let chordMatches = []
		for (let i = 0; i < chordsArray.length; i++) {
			if (includes(chordsArray[i].name.slice(0,2).toLowerCase(), query.toLowerCase())) {
				chordMatches.push(chordsArray[i])
			}
		}
		
		return (
			<div className="search-results">
				
				{chordMatches.length >= 1 ? <ChordSearchResults chordMatches={chordMatches} /> : null}
				
			</div>
		)
	}
}

export default SearchResults