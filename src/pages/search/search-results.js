import React from 'react'

import orderBy from 'lodash/orderBy'
import includes from 'lodash/includes'
import findChordMatches from './find-chord-matches'

import Ad from '../../common/ad'
import Heading from '../../common/heading'
import SadFace from '../../common/sad-face'
import ChordChart from '../../common/chord-chart'
import FlatButton from 'material-ui/FlatButton'

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
									<ChordChart key={chord.id} chord={chord}
										checkFunction={this.props.updateProgressChords}
                    completed={includes(this.props.appState.account.progress.guitar.chords, chord.id)} />
								))}
							</div>
						) : (
							<div className="search-results-chords">
								{this.props.chordMatches.slice(0,5).map((chord, index) => (
									<ChordChart key={chord.id} chord={chord}
										checkFunction={this.props.updateProgressChords}
                    completed={includes(this.props.appState.account.progress.guitar.chords, chord.id)} />
								))}
							</div>
						)}
						{this.props.chordMatches.length > 5 ? (
              <FlatButton onClick={this.handleMore}
                label={this.state.more ? 'Less...' : `Show all ${this.props.chordMatches.length} search results...`} />
            ) : null}
					</div>
				) : null}
			</div>
		)
	}
}

const SearchResults = props => {
  if (props.isInputMalicious) {
    return <p>Search input is potentially malicious.</p>
  } else if (props.input === '') {
    return null
  } else {
    const chordMatches = orderBy(findChordMatches(props.database.chordChooser, props.input), ['fret'], ['asc'])
    if (chordMatches.length === 0) {
      return <SadFace>No Search Results.</SadFace>
    } else {
      return (
        <div className="search-results">
          
          <ChordSearchResults appState={props.appState}
            updateProgressChords={props.updateProgressChords}
            chordMatches={chordMatches} />
          
          <Ad style={{ margin: '10px 0 0 0' }} />
          
        </div>
      )
    }
  }
}

export default SearchResults