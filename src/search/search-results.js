import React from 'react'

import findChordMatches from './find-chord-matches'
import transferChordsIntoArray from '../functions/transfer-chords-into-array'

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
						<FlatButton onClick={this.handleMore}
							label={this.state.more ? 'Less...' : 'More...'} />
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
		
		const matches = findChordMatches(transferChordsIntoArray(database.chordChooser), query)
		
		return (
			<div className="search-results">
				
				{matches.length >= 1 ? <ChordSearchResults chordMatches={matches} /> : null}
				
			</div>
		)
	}
}

export default SearchResults