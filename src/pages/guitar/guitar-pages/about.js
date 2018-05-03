import React from 'react'

import Heading from '../../../common/heading'

class GuitarAbout extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			content1: true,
			content2: false
		}
		this.toggleContent1 = this.toggleContent1.bind(this)
		this.toggleContent2 = this.toggleContent2.bind(this)
	}
	
	toggleContent1() {
		this.setState({ content1: !this.state.content1 })	}
	toggleContent2() {
		this.setState({ content2: !this.state.content2 })	}
	
	render() {
		return (
			<div id="guitar-about">

				<Heading onClick={this.toggleContent1}
					active={this.state.content1}>Guitar Anatomy</Heading>
				{this.state.content1 ? (
					<div>
						<p>Diagram showing different parts of a Fender Stratocatser Electeric Guitar.</p>
						<img src={this.props.globalText.api.aws + '/images/guitar-anatomy.png'} alt="Guitar Anatomy" />
					</div>
				) : null}

			</div>
		)
	}
	
}

export default GuitarAbout