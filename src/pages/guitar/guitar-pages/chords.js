import React from 'react'

import axios from 'axios'
import orderBy from 'lodash/orderBy'

import ChordChooser from '../../../common/chord-chooser'
import ChordChart from '../../../common/chord-chart'
import Heading from '../../../common/heading'
import Loading from '../../../common/loading'
import Ad from '../../../common/ad'

class StandardChords extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = { standardChords: null }
	}
	
	componentDidMount() {
    axios.get(`${this.props.globalText.api.url}/standardChords`)
      .then(response => this.setState({ standardChords: response.data }))
      .catch(error => this.setState({ standardChords: 'error' }))
	}
	
	render() {
		if (this.state.standardChords === null) {
			return (
				<div className="guitar-chords-track">
					<Loading />
				</div>
			)
		} else if (this.state.standardChords.constructor === Array) {
			return (
				<div className="guitar-chords-track">
					{orderBy(this.state.standardChords, ['name'],['asc']).map(chord => (
						<ChordChart key={chord.id}
							chord={chord} />
					))}
				</div>
			)
		} else if (this.state.standardChords === 'error') {
      return (
        <div className="guitar-chords-track">
          Error
        </div>
      )
    }
	}
}

class GuitarChords extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      content1: false,
      content2: true
    }
    this.toggleContent1 = this.toggleContent1.bind(this)
    this.toggleContent2 = this.toggleContent2.bind(this)
  }
  
  toggleContent1() {
    this.setState({ content1: !this.state.content1 }) }
  toggleContent2() {
    this.setState({ content2: !this.state.content2 }) }
  
  render() {
    return (
      <div id="guitar-chords">
        
        <Heading onClick={this.toggleContent1}
          active={this.state.content1}
					subtitle="15 chords">
					Common Chords
				</Heading>
        {this.state.content1 ? (
          <div>
            <p>Here is a list the standard (non-bar) chords that every guitarist should know.</p>
            <StandardChords appState={this.props.appState}
							globalText={this.props.globalText}/>
          </div>
        ) : null}
				
				<Ad />
        
        <Heading onClick={this.toggleContent2}
          active={this.state.content2}
					subtitle="187 chords">
					Chord Finder
				</Heading>
        {this.state.content2 ? (
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