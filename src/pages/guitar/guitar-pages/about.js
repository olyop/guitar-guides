import React from 'react'

import { Heading1 } from '../../../common/heading'

class GuitarAbout extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			content1: false,
			content2: false,
			content3: true,
			content4: false
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
						<p>Diagram showing different parts of a Fender Stratocatser Electric Guitar.</p>
						<img src={this.props.globalText.api.aws + '/images/guitar-anatomy.png'} alt="Guitar Anatomy" />
					</div>
				) : null}

        <Heading1 onClick={this.toggleContent3}
					active={this.state.content3}>Famous Guitar Brands</Heading1>
				{this.state.content3 ? (
					<div style={contentStyle}>
						<img className="guitar-about-logo" src={this.props.globalText.api.aws + '/icons/fender.png'} alt="Fender" />
						<p>Fender, is an American manufacturer of stringed instruments and amplifiers. Fender Guitars are among the most recognized in the world. Fender is famous for its solid-body electric guitars and bass guitars, such as the Stratocaster, Telecaster, Precision Bass, and the Jazz Bass. Its headquarters are in Scottsdale, Arizona. The company also manufactures acoustic guitars, electric basses, mandolins, banjos, and electric violins, as well as guitar amplifiers, bass amplifiers, and PA (public address) equipment. Other Fender brands include Squier (entry level/budget), Jackson, Charvel, EVH guitars and amplifiers in collaboration with Eddie Van Halen, and the manufacture and distribution of Gretsch guitars under license.</p>
						<img className="guitar-about-logo" src={this.props.globalText.api.aws + '/icons/gibson.png'} alt="Gibson" />
						<p>Gibson is an American manufacturer of guitars, other musical instruments, and consumer and professional electronics from Kalamazoo, Michigan and now based in Nashville, Tennessee. Orville Gibson founded the company in 1902 as the &#34;Gibson Mandolin-Guitar Mfg. Co. Ltd.&#34; in Kalamazoo, Michigan, to make mandolin&#45;family instruments. By the 1930s, the company was also making flattop acoustic guitars, as well as one of the first commercially available hollow&#45;body electric guitars, used and popularized by Charlie Christian. Gibson sells guitars under a variety of brand names and builds one of the world's most iconic guitars, the Gibson Les Paul. Many Gibson instruments are highly collectible. Gibson was at the forefront of innovation in acoustic guitars, especially in the big band era of the 1930s&#59; the Gibson Super 400 was widely imitated. In 1952, Gibson introduced its first solid&#45;body electric guitar, the Les Paul, which became its most popular guitar to date, designed by Ted McCarty and Les Paul.</p>
						<img className="guitar-about-logo" src={this.props.globalText.api.aws + '/icons/ibanez.png'} alt="Ibanez" />
						<p>Ibaenez is a Japanese guitar brand owned by Hoshino Gakki. Based in Nagoya, Aichi, Japan, Hoshino Gakki were one of the first Japanese musical instrument companies to gain a significant foothold in import guitar sales in the United States and Europe, as well as the first brand of guitars to mass-produce the seven-string guitar and eight-string guitar. Ibanez manufactures effects, accessories, amps, and instruments in Japan, China, Indonesia and in the United States (at a Los Angeles-based custom shop). Currently, there are nearly 165 models of bass guitar, 130 acoustic guitars, and more than 300 electric guitars.</p>
						<img className="guitar-about-logo" src={this.props.globalText.api.aws + '/icons/prs.png'} alt="PRS" />
						<p>PRS Guitars (also known as Paul Reed Smith Guitars) is an American guitar manufacturer headquartered in Stevensville, Maryland, founded by luthier Paul Reed Smith in 1985. Since the 1990s, PRS has expanded production to Asia, where they manufacture the lower-priced 'SE' line of instruments. As of 2013, they have begun making more affordable guitars in the United States with their 'S2' line. PRS Guitars also manufactures guitar amplifiers; three of PRS's most notable endorsers are Carlos Santana, John Mayer and Mark Holcomb of Periphery, Alex Lifeson, all 4 with "signature" guitar models.</p>
						<img className="guitar-about-logo" src={this.props.globalText.api.aws + '/icons/rickenbacker.png'} alt="Rickenbacker" />
						<p>Rickenbacker is an electric string instrument manufacturer based in Santa Ana, California. In 1932, the company became the world's first to produce electric guitars and eventually produced a range of electric guitars and bass guitars. The company was founded in 1931 by Adolph Rickenbacher and George Beauchamp.</p>
					</div>
				) : null}

        <Heading1 onClick={this.toggleContent4}
					active={this.state.content4}>Accessories</Heading1>

			</div>
		)
	}

}

export default GuitarAbout
