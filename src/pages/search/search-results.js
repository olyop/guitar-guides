import React from 'react'

import orderBy from 'lodash/orderBy'
import includes from 'lodash/includes'
import { findChordMatches, findPageMatches, findRiffMatches } from './find-matches'

import { Link } from 'react-router-dom'
import Ad from '../../common/ad'
import Riff from '../../common/riff'
import Heading from '../../common/heading'
import SadFace from '../../common/sad-face'
import ChordChart from '../../common/chord-chart'
import FlatButton from 'material-ui/FlatButton'

const adStyle = { marginTop: '10px', marginBottom: '10px'  }

class PageSearchResults extends React.Component {
	constructor(props) {
		super(props)
		this.state = { content: true }
		this.handleContent = this.handleContent.bind(this)
	}
	
	handleContent() {
		this.setState({ content: !this.state.content }) }
	
	render() {
		const matches = this.props.matches
		if (matches.length === 0) { return null }
		else {
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
					<Ad style={adStyle} />
				</div>
			)
		}
	}
}

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
		if (matches.length === 0) { return null	}
		else {
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
											completed={includes(this.props.appState.account.progress.guitar.chords, chord.id)}
											progressLoading={this.props.updateProgressChordsLoading} />
									))}
								</div>
							) : (
								<div className="search-results-chords">
									{matches.slice(0,5).map((chord, index) => (
										<ChordChart key={chord.id} chord={chord}
											checkFunction={this.props.updateProgressChords}
											completed={includes(this.props.appState.account.progress.guitar.chords, chord.id)}
											progressLoading={this.props.updateProgressChordsLoading} />
									))}
								</div>
							)}

							{matches.length > 5 ? (
								<FlatButton onClick={this.handleMore}
									label={this.state.more ? 'Less...' : 'Show all'} />
							) : null}

						</div>
					) : null}
					<Ad style={adStyle} />
				</div>
			)
		}
	}
}

class RiffSearchResults extends React.Component {
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
		if (matches.length === 0) { return null }
		else {
			return (
				<div className="search-results-content">
					<Heading onClick={this.handleContent}
						active={this.state.content}
						subtitle={`${matches.length} ${matches.length === 1 ? 'match' : 'matches'}`}>Riffs</Heading>
					{this.state.content ? (
						<div>
							{this.state.more ? (
								<div className="search-results-riffs">
									{matches.map(riff => (
										<Riff key={riff.id}
											globalText={this.props.globalText} riff={riff} />
									))}
								</div>
							) : (
								<div className="search-results-riffs">
									{matches.slice(0,5).map(riff => (
										<Riff key={riff.id}
											globalText={this.props.globalText} riff={riff} />
									))}
								</div>
							)}
							{matches.length > 5 ? (
								<FlatButton onClick={this.handleMore}
									label={this.state.more ? 'Less...' : 'Show all'} />
							) : null}
						</div>
					) : null}
					<Ad style={adStyle} />
				</div>
			)
		}
  }
}

const SearchResults = props => {
  if (props.isInputMalicious) {
    return <p>Search input is potentially malicious.</p>
  } else if (props.input === '') {
    return null
  } else {
		let unsortedMatches = [
			{ type: 'pages', matches: orderBy(findPageMatches(props.globalText.pageStructure, props.input), ['name'], ['asc']) },
			{ type: 'chords', matches: orderBy(findChordMatches(props.database.chordChooser, props.input), ['fret'], ['asc']) },
			{ type: 'riffs', matches: orderBy(findRiffMatches(props.database.riffs, props.input), ['title'], ['asc']) }
		]
		let matches = orderBy(unsortedMatches, ['matches'], ['asc'])
		console.log()
    if (matches[0].matches.length === 0 && matches[1].matches.length === 0 && matches[2].matches.length === 0) {
			return <SadFace>No Search Results.</SadFace>
		} else {
      return (
        <div className="search-results">
					{matches.map((match, index) => {
						if (match.type === 'pages') { return <PageSearchResults key={index} appState={props.appState} globalText={props.globalText} matches={match.matches} /> }
						else if (match.type === 'chords') { return <ChordSearchResults key={index} appState={props.appState} globalText={props.globalText} matches={match.matches} /> }
						else if (match.type === 'riffs') { return <RiffSearchResults key={index} appState={props.appState} globalText={props.globalText} matches={match.matches} /> }
						else { return null }
					})}
        </div>
      )
    }
  }
}

export default SearchResults