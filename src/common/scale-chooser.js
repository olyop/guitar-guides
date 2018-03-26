import React from 'react'

import './css/scale-chooser.css'

import GuitarTab from './guitar-tab'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class ScaleChooser extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			key: 7,
			type: 1
		}
		
		this.handleKeyChange = this.handleKeyChange.bind(this)
		this.handleTypeChange = this.handleTypeChange.bind(this)
	}
	
	handleKeyChange(event, index, value) { this.setState({ key: value }) }
	handleTypeChange(event, index, value) { this.setState({ type: value }) }
	
	render() {
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
					
					<GuitarTab scale={this.props.scalesData[7][2][0]} />
					
				</div>
				
			</div>
		)
	}
}

export default ScaleChooser