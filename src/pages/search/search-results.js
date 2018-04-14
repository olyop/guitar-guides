import React from 'react'

import orderBy from 'lodash/orderBy'
import includes from 'lodash/includes'
import { findChordMatches, findPageMatches } from './find-matches'

import { Link } from 'react-router-dom'
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
	
	handleMore() {
		this.setState({ more: !this.state.more }) }
	handleContent() {
		this.setState({ content: !this.state.content }) }
	
	render() {
		const matches = this.props.matches 
		return (
			<div className="search-results-content">
        
				<Heading onClick={this.handleContent}
					active={this.state.content}
					subtitle={`${matches.length} ${matches.length === 1 ? 'match' : 'matches'}`}>Chords</Heading>
				{this.state.content ? (
					<div>
            
						{this.state.more ? (
							<div className="search-results-chords">
								{matches.map((chord, index) => (
									<ChordChart key={chord.id} chord={chord}
										checkFunction={this.props.updateProgressChords}
                    completed={includes(this.props.appState.account.progress.guitar.chords, chord.id)} />
								))}
							</div>
						) : (
							<div className="search-results-chords">
								{matches.slice(0,5).map((chord, index) => (
									<ChordChart key={chord.id} chord={chord}
										checkFunction={this.props.updateProgressChords}
                    completed={includes(this.props.appState.account.progress.guitar.chords, chord.id)} />
								))}
							</div>
						)}
            
						{matches.length > 5 ? (
              <FlatButton onClick={this.handleMore}
                label={this.state.more ? 'Less...' : 'Show all'} />
            ) : null}
            
					</div>
				) : null}
            
        <Ad style={{ margin: '10px 0 0 0' }} />
        
			</div>
		)
	}
}

class PageSearchResults extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			content: true
		}
		this.handleContent = this.handleContent.bind(this)
	}
	
	handleContent() {
		this.setState({ content: !this.state.content }) }
	
	render() {
		const matches = this.props.matches
		return (
			<div className="search-results-content">
        
				<Heading onClick={this.handleContent}
					active={this.state.content}
					subtitle={`${matches.length} ${matches.length === 1 ? 'match' : 'matches'}`}>Pages</Heading>
				{this.state.content ? (
					<div className="search-results-pages">
            {matches.map(page => (
              <Link key={page.id} to={page.path}>
                <div className="search-results-page">
                  <i className="material-icons">bookmark</i>
                  <p>{page.name} - <b>{page.path}</b></p>
                </div>
              </Link>
            ))}
          </div>
				) : null}
        
        <Ad style={{ margin: '10px 0 0 0' }} />
				
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
		const pageMatches = findPageMatches(props.globalText.pageStructure, props.input)
    if (chordMatches.length === 0 && pageMatches.length === 0) {
      return <SadFace>No Search Results.</SadFace>
    } else {
      return (
        <div className="search-results">
          
          {pageMatches.length === 0 ? null : (
            <PageSearchResults appState={props.appState}
              matches={pageMatches} />
          )}
					
					{chordMatches.length === 0 ? null : (
            <ChordSearchResults appState={props.appState}
              updateProgressChords={props.updateProgressChords}
              matches={chordMatches} />
          )}
          
        </div>
      )
    }
  }
}

export default SearchResults