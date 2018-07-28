import React from 'react'

import axios from 'axios'
import includes from 'lodash/includes'
import orderBy from 'lodash/orderBy'

import ChordChart from './chord-chart'
import RaisedButton from 'material-ui/RaisedButton'
import Loading from '../common/loading'

import './css/chord-chooser.css'

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
  
  UNSAFE_componentWillReceiveProps() {
    this.setState({ index: 0 }) }
  
  render() {
		const variations = this.props.variations
		const chord = variations[this.state.index]
    return (
      <div>
        <div className="chord-chooser-chart">
          
          <i onClick={this.left}
            className={this.state.index === 0 ? 'material-icons chord-chooser-variation chord-chooser-variation-max' : 'material-icons chord-chooser-variation'}>
						keyboard_arrow_left
					</i>

          <ChordChart chord={chord}
						checkFunction={this.props.updateProgressChords}
						completed={includes(this.props.appState.account.progress.guitar.chords, chord.id)}  />

          <i onClick={this.right}
            className={'material-icons chord-chooser-variation' + (this.state.index === variations.length - 1 ? 'chord-chooser-variation-max' : '')}>
						keyboard_arrow_right
					</i>
          
        </div>
        <h5>{variations.length === 1 ? '1/1' : `${this.state.index + 1}/${variations.length}`}</h5>
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
    axios.get(`${this.props.globalText.api.url}/chordChooser`)
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
								onClick={ () => this.setState({ note: index }) }
							/>
						))}
					</div>

					<h4>Type</h4>
					<div className="chord-chooser-buttons">
						{this.props.theoryData.chordTypes.map((type, index) => (
							<RaisedButton key={index} label={type}
								className="chord-chooser-button"
								backgroundColor={this.state.type === index ? '#F44336' : '#fff'}
								labelColor={this.state.type === index ? '#fff' : '#333'}
								onClick={ () => this.setState({ type: index }) }
							/>
						))}
					</div>

					{this.state.note === null || this.state.type === null ? null : (
						<ChordChartVariations appState={this.props.appState}
							updateProgressChords={this.props.updateProgressChords}
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