import React from 'react'

import './css/scale-chooser.css'

import GuitarTab from './guitar-tab'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class ScaleChooser extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			key: 0,
			type: 0,
			index: 0
		}
		this.handleKeyChange = this.handleKeyChange.bind(this)
		this.handleTypeChange = this.handleTypeChange.bind(this)
    this.left = this.left.bind(this)
    this.right = this.right.bind(this)
	}
	
	handleKeyChange(event, index, value) {
    this.setState({ key: value, index: 0 }) }
	handleTypeChange(event, index, value) {
    this.setState({ type: value, index: 0 }) }
	
	left() {
    if (this.state.index !== 0) {
      this.setState({ index: this.state.index - 1 })
		}
	}
  right() {
    if (this.state.index !== this.props.scalesData[this.state.key][this.state.type].length - 1) {
      this.setState({ index: this.state.index + 1 })
		}
	}
	
	render() {
		let buttonStyle = {
			margin: '0',
			minWidth: 'auto',
			padding: '5px',
			right: 0
		}
		return (
			<div className="scale-chooser">
				
				<div className="scale-chooser-menus">
					
					<SelectField floatingLabelText="Key"
						value={this.state.key}
          	onChange={this.handleKeyChange}
						className="scale-chooser-menu">
						{this.props.theoryData.notes.map((note, index) => (
							<MenuItem key={index} value={index} primaryText={note} /> 
						))}
					</SelectField>
					
					<SelectField floatingLabelText="Type"
						value={this.state.type}
          	onChange={this.handleTypeChange}
						className="scale-chooser-menu">
						{this.props.theoryData.scaleTypes.map((type, index) => (
							<MenuItem key={index} value={index} primaryText={type} />
						))}
					</SelectField>
					
				</div>
				
				<div className="scale-chooser-tab"> 
					
					<GuitarTab tab={this.props.scalesData[this.state.key][this.state.type][this.state.index]} />
				
					<div className="scale-variations">
						<FlatButton onClick={this.left}
							style={buttonStyle}>
							<i className="material-icons">keyboard_arrow_left</i>
						</FlatButton>
						<FlatButton onClick={this.right}
							style={buttonStyle}>
							<i className="material-icons">keyboard_arrow_right</i>
						</FlatButton>
					</div>
					
				</div>
				
			</div>
		)
	}
}

export default ScaleChooser