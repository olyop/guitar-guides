import React from 'react'

import orderBy from 'lodash/orderBy'
import ChordChart from '../../../common/chord-chart'
import ChordChooser from '../../../common/chord-chooser'
import Heading from '../../../common/heading'

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
  
  toggleContent1() { this.setState({ content1: !this.state.content1 }) }
  toggleContent2() { this.setState({ content2: !this.state.content2 }) }
  
  render() {
    return (
      <div id="guitar-chords">
        
        <Heading title="Standard Chords"
          onClick={this.toggleContent1}
          active={this.state.content1}/>
        {this.state.content1 ? (
          <div>
            <p>Here is a list the standard (non-bar) chords that every guitarist should know.</p>
            <div className="guitar-chords-track">
              {orderBy(this.props.chordsData.standard, ['name'],['asc']).map(chord => (
                <ChordChart key={chord.id}
                  chord={chord} />
              ))}
            </div>
          </div>
        ) : null}
        
        <Heading title="Chord Chooser"
          onClick={this.toggleContent2}
          active={this.state.content2} />
        {this.state.content2 ? (
          <ChordChooser
            chordsData={this.props.chordsData}
            theoryData={this.props.theoryData} />
        ) : null}

      </div>
    )
  }
} 

export default GuitarChords