import React from 'react'

import FlatButton from 'material-ui/FlatButton'
import GuitarTab from './guitar-tab'

import  './css/riff.css'

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
			riffText: { justifyContent: this.state.more ? 'flex-start' : 'center' },
			button: {
				padding: '0',
				height: 'auto'
			},
      imgStyle: {
        width: this.state.more ? '150px' : '41px',
        height: this.state.more ? '150px' : '41px'
      },
      title: {
				paddingBottom: this.state.more ? '5px' : '0',
				borderBottom: this.state.more ? '1px solid #BDBDBD' : 'none',
				marginBottom: this.state.more ? '5px' : '0'
			}
		}
		return (
			<div key={riff.id}
				style={styles.riff}
				className="riff">
				
				<FlatButton fullWidth
					style={styles.button}
					onClick={this.toggleMore}
					className="riff">
					<div className="riff-inner">
						<div className="riff-info">
							<img src={`${this.props.globalText.api.aws}/riffs-album-covers/${riff.id}.jpg`} alt="album"
								style={styles.imgStyle} />
							<div className="riff-text"
								style={styles.riffText}>
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
							<i className="material-icons">{this.state.more ? 'expand_less' : 'expand_more'}</i>
						</div>
					</div>
				</FlatButton>
				
				{this.state.more ? (
					<div className="riff-more">
						<GuitarTab tab={riff.tab} />
					</div>
				) : null}
				
			</div>
		)
	}
}

export default Riff