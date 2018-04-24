import React from 'react'

import axios from 'axios'
import orderBy from 'lodash/orderBy'

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
        marginRight: '15px'
      },
      title: {
				fontSize: this.state.more ? '27px' : '21px',
				paddingBottom: this.state.more ? '5px' : '0',
				borderBottom: this.state.more ? '1px solid #BDBDBD' : 'none',
				marginBottom: this.state.more ? '5px' : '0'
			},
			right: { alignItems: this.state.more ? 'flex-start' : 'center' },
			icon: {
				borderRadius: '100%',
				margin: '0 5px 0 0',
				minWidth: 'auto',
				padding: '0'
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
					<div className="riff-inner"
						style={styles.right}>
						<div className="riff-info">
							<img src={`${this.props.globalText.api.aws}/riffs-album-covers/${riff.id}.jpg`} alt="album"
								style={styles.imgStyle} />
							<div className="riff-text">
								<div className="riff-title"
									style={styles.title}>{riff.title}</div>
								{this.state.more ? (
									<div className="riff-artist-more">
										<div className="riff-artist-more-album">{`${riff.album} (${riff.year})`}</div>
										<div className="riff-artist-more-artist">{riff.artist}</div>
									</div>
								) : (
									<div className="riff-artist">
										<section style={styles.artist}>{riff.album} ({riff.year})</section>
										<b style={styles.artist}> &#8211; </b>
										<section style={styles.artist}>{riff.artist}</section>
									</div>
								)}
							</div>
						</div>
						<div className="riff-right">
							<FlatButton style={styles.icon}>
								<i className="material-icons">done</i>
							</FlatButton>
							<FlatButton style={styles.icon}>
								<i className="material-icons">expand_more</i>
							</FlatButton>
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
    axios.get(`${this.props.globalText.api.url}/riffs`)
      .then(response => this.setState({ riffs: orderBy(response.data, ['title'],['asc']) }))
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
						subtitle={`${this.state.riffs.length + 1} riffs`}>Famous Rock Riffs</Heading>
					{this.state.content1 ? (
						<div className="riffs">
							{this.state.riffs.map((riff, index) => <Riff globalText={this.props.globalText} riff={riff} />)}
						</div>
					) : null}

				</div>
			)
		}
	}
}

export default GuitarRiffs