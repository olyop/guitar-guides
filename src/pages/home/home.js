import React from 'react'

import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton'

// Import Images
import guitarStock from '../../media/guitar-stock-photo.jpg'
import bassStock from '../../media/bass-stock-photo.jpg'
import musicStock from '../../media/music-stock-photo.jpg'

import './home.css'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			suggested: true
		}
		this.closeSuggested = this.closeSuggested.bind(this)
	}
	closeSuggested() { this.setState({ suggested: false }) }
	render() {
		let buttonStyle = {
			position: 'absolute',
			borderRadius: '100%',
			margin: '10px',
			minWidth: 'auto',
			padding: '5px',
			top: '0',
			right: '0'
		}
		return (
			<div id="home">

				<div className="home-cards">

					<div className="home-section home-left">
						<div className="home-section-inner">

							<Link to="/guitar"
								target="_blank"
								className="home-section-icon home-section-open">
								<i className="material-icons">open_in_new</i>
							</Link>

							<div className="home-section-icon home-section-check">
								<i className="material-icons">check_circle</i>
							</div>

							<div className="home-section-image"
								style={{ backgroundImage: 'url('+ guitarStock + ')' }} />
							<h2>Learn</h2>
							<h1><Link to="/guitar" title="Learn Guitar">Guitar</Link></h1>
							<div className="home-section-line" />
							<div className="home-section-content">
								<ul>
									<li><Link to="/guitar/chords">Chords</Link></li>
									<li><Link to="/guitar/scales">Scales</Link></li>
									<li><Link to="/guitar/exercises">Exercises</Link></li>
									<li><Link to="/guitar/riffs">Riffs</Link></li>
									<li><Link to="/guitar/about">About</Link></li>
								</ul>
							</div>

						</div>
					</div>

					<div className="home-section home-middle">
						<div className="home-section-inner">

							<Link to="/bass" className="home-section-icon home-section-open">
								<i className="material-icons">open_in_new</i>
							</Link>

							<div className="home-section-icon home-section-check">
								<i className="material-icons">check_circle</i>
							</div>

							<div className="home-section-image"
								style={{ backgroundImage: 'url('+ bassStock + ')' }} />
							<h2>Learn</h2>
							<h1><Link to="/bass" title="Learn Bass">Bass</Link></h1>
							<div className="home-section-line" />
							<div className="home-section-content">
								<ul>
									<li><Link to="/bass">Chords</Link></li>
									<li><Link to="/bass">Scales</Link></li>
									<li><Link to="/bass">Exercises</Link></li>
									<li><Link to="/bass">Riffs</Link></li>
									<li><Link to="/bass">About</Link></li>
								</ul>
							</div>

						</div>
					</div>

					<div className="home-section home-right">
						<div className="home-section-inner">

							<Link to="/bass" className="home-section-icon home-section-open">
								<i className="material-icons">open_in_new</i>
							</Link>

							<div className="home-section-icon home-section-check">
								<i className="material-icons">check_circle</i>
							</div>

							<div className="home-section-image"
								style={{ backgroundImage: 'url('+ musicStock + ')' }} />
							<h2>Learn</h2>
							<h1><Link to="/theory" title="Learn Theory">Theory</Link></h1>
							<div className="home-section-line" />
							<div className="home-section-content">
								<ul>
									<li><Link to="/theory">Chords</Link></li>
									<li><Link to="/theory">Scales</Link></li>
									<li><Link to="/theory">Exercises</Link></li>
									<li><Link to="/theory">Riffs</Link></li>
									<li><Link to="/theory">About</Link></li>
								</ul>
							</div>

						</div>
					</div>

				</div>

				{this.state.suggested ? (
					<div className="home-suggested">
						<FlatButton onClick={this.closeSuggested}
							className="home-suggested-close"
							style={buttonStyle}>
							<i className="material-icons">close</i>
						</FlatButton>
					</div>
				) : null}

			</div>
		)
	}
}

export default Home