import React from 'react'

import ChordChart from '../../../common/chord-chart'
import orderBy from 'lodash/orderBy'

class ChordChartVariations extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = { index: 0 }
    
    this.left = this.left.bind(this)
    this.right = this.right.bind(this)
  }
  
  left() {
    if (this.state.index === 0) {
      return
    } else {
      this.setState({ index: this.state.index -1 })
    }
  }
  
  right() {
    if (this.state.index === this.props.variations.length - 1) {
      return
    } else {
      this.setState({ index: this.state.index + 1 })
    }
  }
  
  componentWillReceiveProps() {
    this.setState({ index: 0 })
  }
  
  render() {
    return (
      <div className="chord-chooser-chart">

        <i onClick={this.left}
          className={this.state.index === 0 ? 'material-icons chord-chooser-variation chord-chooser-variation-max' : 'material-icons chord-chooser-variation'}>keyboard_arrow_left</i>
        
        <ChordChart chord={this.props.variations[this.state.index]} />
        
        <i onClick={this.right}
          className={this.state.index === this.props.variations.length - 1 ? 'material-icons chord-chooser-variation chord-chooser-variation-max' : 'material-icons chord-chooser-variation'}>keyboard_arrow_right</i>

      </div>
    )
  }
}

class ChordChooser extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      note: 0,
      type: 0
    }
  }
  
  render() {    
    return (
      <div id="chord-chooser">
        
        <h4>Choose Note</h4>
        <div className="chord-chooser-buttons">
          {this.props.theoryData.notes.map((note, index) => (
            <div key={index}
              className={this.state.note === index ? 'chord-chooser-button chord-chooser-button-active' : 'chord-chooser-button'}
              onClick={ () => this.setState({ note: index }) }>
              {note}
            </div>
          ))}
        </div>
        
        <h4>Choose Type</h4>
        <div className="chord-chooser-buttons">
          {this.props.theoryData.chordTypes.map((type, index) => (
            <div key={index}
              className={this.state.type === index ? 'chord-chooser-button chord-chooser-button-active' : 'chord-chooser-button'}
              onClick={ () => this.setState({ type: index }) }>
              {type}
            </div>
          ))}
        </div>
        
        {this.state.note === null || this.state.type === null ? null : <ChordChartVariations variations={orderBy(this.props.chordsData.chordChooser[this.state.note][this.state.type], ['fret'],['asc'])} /> }
        
      </div>
    )
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
  
  toggleContent1() { this.setState({ content1: !this.state.content1 }) }
  toggleContent2() { this.setState({ content2: !this.state.content2 }) }
  
  render() {
    return (
      <div id="guitar-chords">

        <div onClick={this.toggleContent1}
          className="guitar-chords-heading">
          <h1>Standard Chords</h1>
          <i className="material-icons">{this.state.content1 ? 'arrow_drop_up' : 'arrow_drop_down'}</i>
        </div>
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
        
        <div onClick={this.toggleContent2}
          className="guitar-chords-heading">
          <h1>Chord Chooser</h1>
          <i className="material-icons">{this.state.content2 ? 'arrow_drop_up' : 'arrow_drop_down'}</i>
        </div>
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