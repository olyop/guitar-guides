import React from 'react'

import GuitarTab from '../../../common/guitar-tab'
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
			
				<Heading onClick={this.state.toggleContent1}>Scale Chooser</Heading>
				{this.state.content1 ? (
					<div>
						<p>Choose what scale you want to learn.</p>
						
					</div>
				) : null}
			
			</div>
		)
	}
}

export default GuitarScales