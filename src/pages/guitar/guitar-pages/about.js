import React from 'react'

import { Heading1, Heading2 } from '../../../common/heading'

class GuitarAbout extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			content1: true,
			content2: true,
			content3: true,
			content4: true
		}
		this.toggleContent1 = this.toggleContent1.bind(this)
		this.toggleContent2 = this.toggleContent2.bind(this)
		this.toggleContent3 = this.toggleContent3.bind(this)
		this.toggleContent4 = this.toggleContent4.bind(this)
	}
	
	toggleContent1() {
		this.setState({ content1: !this.state.content1 })	}
	toggleContent2() {
		this.setState({ content2: !this.state.content2 })	}
	toggleContent3() {
		this.setState({ content3: !this.state.content3 })	}
	toggleContent4() {
		this.setState({ content4: !this.state.content4 })	}
	
	render() {
		let contentStyle = { marginBottom: '20px' }
		return (
			<div id="guitar-about">
        
        <Heading1 onClick={this.toggleContent1}
					active={this.state.content1}>Description</Heading1>
				{this.state.content1 ? (
					<div style={contentStyle}>
            <p>The guitar is a fretted musical instrument that usually has six strings&#46; The sound is projected either acoustically&#44; using a hollow wooden box &#40;for an acoustic guitar&#41;&#44; or through electrical amplifier and a speaker &#40;for an electric guitar&#41;&#46; It is typically played by strumming or plucking the strings with the fingers&#44; or with a pick while fretting &#40;or pressing against the frets&#41; the strings with the fingers of the left hand&#46;</p>
					</div>
				) : null}

				<Heading1 onClick={this.toggleContent2}
					active={this.state.content2}>Guitar Anatomy</Heading1>
				{this.state.content2 ? (
					<div style={contentStyle}>
						<p>Diagram showing different parts of a Fender Stratocatser Electeric Guitar.</p>
						<img src={this.props.globalText.api.aws + '/images/guitar-anatomy.png'} alt="Guitar Anatomy" />
					</div>
				) : null}
        
        <Heading1 onClick={this.toggleContent3}
					active={this.state.content3}>Types of Guitars</Heading1>
				{this.state.content3 ? (
					<div style={contentStyle}>
						<Heading2>Fender Strat</Heading2>
					</div>
				) : null}
        
        <Heading1 onClick={this.toggleContent4}
					active={this.state.content4}>Accessories</Heading1>
        
			</div>
		)
	}
	
}

export default GuitarAbout