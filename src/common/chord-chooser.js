import React from 'react'

import axios from 'axios'
import orderBy from 'lodash/orderBy'

import ChordChart from './chord-chart'
import RaisedButton from 'material-ui/RaisedButton'
import Loading from '../common/loading'

import './chord-chooser.css'

class ChordChartVariations extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = { index: 0 }
    
    this.left = this.left.bind(this)
    this.right = this.right.bind(this)
  }
  
  left() {
    if (this.state.index !== 0) {
      this.setState({ index: this.state.index - 1 })
    }
  }
  
  right() {
    if (this.state.index !== this.props.variations.length - 1) {
      this.setState({ index: this.state.index + 1 })
    }
  }
  
  componentWillReceiveProps() {
    this.setState({ index: 0 })
  }
  
  render() {
    return (
      <div>
        <div className="chord-chooser-chart">
          
          <i onClick={this.left}
            className={this.state.index === 0 ? 'material-icons chord-chooser-variation chord-chooser-variation-max' : 'material-icons chord-chooser-variation'}>keyboard_arrow_left</i>

          <ChordChart chord={this.props.variations[this.state.index]} />

          <i onClick={this.right}
            className={this.state.index === this.props.variations.length - 1 ? 'material-icons chord-chooser-variation chord-chooser-variation-max' : 'material-icons chord-chooser-variation'}>keyboard_arrow_right</i>
          
        </div>
        <h5>{this.props.variations.length === 1 ? '1/1' : `${this.state.index + 1}/${this.props.variations.length}`}</h5>
      </div>
    )
  }
}

class ChordChooser extends React.Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
			chordChooser: null,
      note: 0,
      type: 0
    }
  }
	
	// Get Chord Database
	componentDidMount() {
    axios.get('http://localhost:3001/chordChooser')
      .then(response => {
        this.setState({ chordChooser: response.data })
      })
      .catch(error => {
        console.log(error)
      })
	}
  
  render() {
    if (this.state.chordChooser === null) {
			return (
				<div id="chord-chooser">
					<Loading />
				</div>
			)
		} else if (this.state.chordChooser.constructor === Array) {
			return (
				<div id="chord-chooser">

					<h4>Key</h4>
					<div className="chord-chooser-buttons">
						{this.props.theoryData.notes.map((note, index) => (
							<RaisedButton key={index} label={note}
								className="chord-chooser-button"
								backgroundColor={this.state.note === index ? '#F44336' : '#fff'}
								labelColor={this.state.note === index ? '#fff' : '#333'}
								onClick={ () => this.setState({ note: index }) } />
						))}
					</div>

					<h4>Type</h4>
					<div className="chord-chooser-buttons">
						{this.props.theoryData.chordTypes.map((type, index) => (
							<RaisedButton key={index} label={type}
								className="chord-chooser-button"
								backgroundColor={this.state.type === index ? '#F44336' : '#fff'}
								labelColor={this.state.type === index ? '#fff' : '#333'}
								onClick={ () => this.setState({ type: index }) } />
						))}
					</div>

					{this.state.note === null || this.state.type === null ? null : (
						<ChordChartVariations
							variations={orderBy(
								this.state.chordChooser[this.state.note][this.state.type], ['fret'],['asc']
							)} />
					)}

				</div>
			)
		}
  }
}

export default ChordChooser