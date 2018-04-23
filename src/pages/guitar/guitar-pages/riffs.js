import React from 'react'

import axios from 'axios'

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
			},
      imgStyle: {
        width: this.state.more ? '150px' : '42px',
        height: this.state.more ? '150px' : '42px',
        borderRadius: this.state.more ? '3px' : '100%',
        marginRight: this.state.more ? '15px' : '10px'
      },
      title: { fontSize: this.state.more ? '27px' : '21px' },
      artist: { fontSize: this.state.more ? '18px' : '15px' }
		}
		return (
			<div key={riff.id}
				onClick={this.toggleMore}
				style={styles.riff}
				className="riff">
				
				<FlatButton fullWidth
					style={styles.button}
					className="riff">
					<div className="riff-info">
						<img src={`${this.props.globalText.api.aws}/riffs-album-covers/${riff.id}.jpg`} alt="album"
              style={styles.imgStyle} />
						<div className="riff-text">
							<div className="riff-title"
                style={styles.title}>{riff.title}</div>
							<div className="riff-artist">
								<section style={styles.artist}>{riff.album} ({riff.year})</section>
								<b style={styles.artist}> &#8211; </b>
								<section style={styles.artist}>{riff.artist}</section>
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
						subtitle={`${this.props.riffsData.length + 1} riffs`}>Famous Rock Riffs</Heading>
					{this.state.content1 ? (
						<div className="riffs">
							{this.props.riffsData.map((riff, index) => <Riff globalText={this.props.globalText} riff={riff} />)}
						</div>
					) : null}

				</div>
			)
		}
	}
}

export default GuitarRiffs