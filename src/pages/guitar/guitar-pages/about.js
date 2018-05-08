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
					active={this.state.content1}>Description</Heading>
				{this.state.content1 ? (
					<div>
            <p>The guitar is a fretted musical instrument that usually has six strings&#46; The sound is projected either acoustically&#44; using a hollow wooden box &#40;for an acoustic guitar&#41;&#44; or through electrical amplifier and a speaker &#40;for an electric guitar&#41;&#46; It is typically played by strumming or plucking the strings with the fingers&#44; or with a pick while fretting &#40;or pressing against the frets&#41; the strings with the fingers of the left hand&#46;</p>
					</div>
				) : null}

				<Heading onClick={this.toggleContent2}
					active={this.state.content2}>Guitar Anatomy</Heading>
				{this.state.content2 ? (
					<div>
						<p>Diagram showing different parts of a Fender Stratocatser Electeric Guitar.</p>
						<img src={this.props.globalText.api.aws + '/images/guitar-anatomy.png'} alt="Guitar Anatomy" />
					</div>
				) : null}
        
        <Heading>Types of Guitars</Heading>
        
        <Heading>Accessories</Heading>
        
        <Heading>History</Heading>
        
        

			</div>
		)
	}
	
}

export default GuitarAbout