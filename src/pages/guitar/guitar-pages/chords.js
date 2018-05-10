import React from 'react'

import axios from 'axios'
import orderBy from 'lodash/orderBy'

import ChordChooser from '../../../common/chord-chooser'
import ChordChart from '../../../common/chord-chart'
import { Heading1 } from '../../../common/heading'
import Loading from '../../../common/loading'
import Ad from '../../../common/ad'

class StandardChords extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			content1: false,
			standardChords: null
		}
    this.toggleContent1 = this.toggleContent1.bind(this)
  }
  
  toggleContent1() {
    this.setState({ content1: !this.state.content1 }) }
	
	componentDidMount() {
    axios.get(`${this.props.globalText.api.url}/standardChords`)
      .then(response => this.setState({ standardChords: response.data }))
      .catch(error => this.setState({ standardChords: 'error' }))
	}
	
	render() {
		if (this.state.standardChords === null) {
			return <Loading />
		} else if (this.state.standardChords === 'error') {
			return <div>Error</div>
		} else if (this.state.standardChords.constructor === Array) {
			return (
				<div>
					<Heading1 onClick={this.toggleContent1}
						active={this.state.content1}
						subtitle="15 chords">Common Chords</Heading1>
					{this.state.content1 ? (
						<div>
							<p>Here is a list the standard (non-bar) chords that every guitarist should know.</p>
							<div className="guitar-chords-track">
								{orderBy(this.state.standardChords, ['name'],['asc']).map(chord => (
									<ChordChart key={chord.id}
										chord={chord} />
								))}
							</div>
						</div>
					) : null}
				</div>
			)
		}
		
	}
}

class GuitarChords extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { content1: true }
    this.toggleContent1 = this.toggleContent1.bind(this)
  }
  
  toggleContent1() {
    this.setState({ content1: !this.state.content1 }) }
  
  render() {
    return (
      <div id="guitar-chords">
        
        <StandardChords appState={this.props.appState}
					globalText={this.props.globalText}
					theoryData={this.props.theoryData} />
				
				<Ad style={{ margin: '15px 0' }} />
        
        <Heading1 onClick={this.toggleContent1}
          active={this.state.content1}
					subtitle="187 chords">Chord Finder</Heading1>
        {this.state.content1 ? (
          <ChordChooser appState={this.props.appState}
						globalText={this.props.globalText}
						theoryData={this.props.theoryData}
						updateProgressChords={this.props.updateProgressChords} />
        ) : null}

      </div>
    )
  }
} 

export default GuitarChords