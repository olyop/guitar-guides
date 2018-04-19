import React from 'react'

import axios from 'axios'

import testAlbumCover from '../../../media/album-covers-temp/test.jpg'

import FlatButton from 'material-ui/FlatButton'
import Heading from '../../../common/heading'
import Loading from '../../../common/loading'

import './riffs.css'

class Riff extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = { more: false }
		this.toggleMore = this.toggleMore.bind(this)
	}
	
	toggleMore() {
		this.setState({ more: !this.state.more })	}
	
	render() {
		const riff = this.props.riff
		let styles = {
			riff: {
				borderTop: '1px solid',
				borderLeft: '1px solid',
				borderRight: '1px solid',
				borderColor: '#e0e0e0',
				padding: '0'
			},
			button: {
				padding: '0',
				height: 'auto'
			}
		}
		return (
			<div key={riff.id}
				onClick={this.toggleMore}
				style={styles.riff}
				className="riff">
				
				<FlatButton fullWidth
					style={styles.button}
					className="riff">
					<div className="riff-info"
						style={{ borderBottom: `1px solid ${this.state.more ? '#e0e0e0' : 'transparent'}` }}>
						<img src={testAlbumCover} alt="album" />
						<div className="riff-text">
							<div className="riff-title">{riff.title}</div>
							<div className="riff-artist">
								<section>{riff.album}</section>
								<b>&#8211;</b>
								<section>{riff.artist}</section>
							</div>
						</div>
					</div>
				</FlatButton>
				
				{this.state.more ? (
					<div className="riff-more">
						<p>Tab</p>
					</div>
				) : null}
				
			</div>
		)
	}
}

class GuitarRiffs extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			riffs: null,
			content1: true
		}
		this.toggleContent1 = this.toggleContent1.bind(this)
	}
	
	componentDidMount() {
    axios.get(`${this.props.globalText.api.url}/scales`)
      .then(response => this.setState({ riffs: response.data }))
      .catch(error => this.setState({ riffs: 'error' }))
	}
	
	toggleContent1() {
		this.setState({ content1: !this.state.content1 }) }
	
	render() {
		if (this.state.riffs === null) {
			return <div id="guitar-riffs"><Loading /></div>
		} else if (this.state.riffs === 'error') {
			return <div id="guitar-riffs">Error</div>
		} else if (this.state.riffs.constructor === Array) {
			return (
				<div id="guitar-riffs">

					<Heading onClick={this.toggleContent1}
						active={this.state.content1}
						subtitle={`${this.props.riffsData.length} riffs`}>Famous Rock Riffs</Heading>
					{this.state.content1 ? (
						<div className="riffs">
							{this.props.riffsData.map((riff, index) => <Riff riff={riff} />)}
						</div>
					) : null}

				</div>
			)
		}
	}
}

export default GuitarRiffs