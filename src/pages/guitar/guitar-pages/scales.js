import React from 'react'

import ScaleChooser from '../../../common/scale-chooser'
import Heading from '../../../common/heading'

class GuitarScales extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			content1: true
		}
		
		this.toggleContent1 = this.toggleContent1.bind(this)
	}
	
	toggleContent1() {
		this.setState({ content1: !this.state.content1 })
	}
	
	render() {
		return (
			<div id="guitar-scales">
			
				<Heading onClick={this.toggleContent1}
					active={this.state.content1}>Scale Chooser</Heading>
				{this.state.content1 ? (
					<div>
						<p>Choose what scale you want to learn.</p>
						<ScaleChooser
							scalesData={this.props.scalesData}
							theoryData={this.props.theoryData} />
					</div>
				) : null}
			
			</div>
		)
	}
}

export default GuitarScales