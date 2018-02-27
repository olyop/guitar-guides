import React from 'react'

import axios from 'axios'
import orderBy from 'lodash/orderBy'

import ChordChooser from '../../../common/chord-chooser'
import ChordChart from '../../../common/chord-chart'
import Heading from '../../../common/heading'
import Loading from '../../../common/loading'

class StandardChords extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = { standardChords: null }
	}
	
	componentDidMount() {
    axios.get('http://localhost:3001/standardChords')
      .then(response => {
        this.setState({ standardChords: response.data })
      })
      .catch(error => {
        console.log(error)
        this.setState({ standardChords: 'error' })
      })
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
		}
	}
}

class GuitarChords extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      content1: true,
      content2: true
    }
    
    this.toggleContent1 = this.toggleContent1.bind(this)
    this.toggleContent2 = this.toggleContent2.bind(this)
  }
  
  toggleContent1() { this.setState({ content1: !this.state.content1 }) }
  toggleContent2() { this.setState({ content2: !this.state.content2 }) }
  
  render() {
    return (
      <div id="guitar-chords">
        
        <Heading onClick={this.toggleContent1}
          active={this.state.content1}>Standard Chords</Heading>
        {this.state.content1 ? (
          <div>
            <p>Here is a list the standard (non-bar) chords that every guitarist should know.</p>
            <StandardChords />
          </div>
        ) : null}
        
        <Heading onClick={this.toggleContent2}
          active={this.state.content2}>Chord Chooser</Heading>
        {this.state.content2 ? (
          <ChordChooser theoryData={this.props.theoryData} />
        ) : null}

      </div>
    )
  }
} 

export default GuitarChords