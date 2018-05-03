import React from 'react'

import { Link } from 'react-router-dom'

// Import Images
import guitarStock from '../../media/guitar-stock-photo.jpg'
import bassStock from '../../media/bass-stock-photo.jpg'

import './home.css'

const Home = props => {
	return (
		<div id="home" className="page">

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
								<li><Link to="/guitar/riffs">Riffs</Link></li>
								<li><Link to="/guitar/about">About</Link></li>
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
							style={{ backgroundImage: 'url('+ bassStock + ')' }} />
						<h2>Learn</h2>
						<h1><Link to="/bass" title="Learn Bass">Bass</Link></h1>
						<div className="home-section-line" />
						<div className="home-section-content">
							<ul>
								<li><Link to="/bass">Chords</Link></li>
								<li><Link to="/bass">Scales</Link></li>
								<li><Link to="/bass">Riffs</Link></li>
								<li><Link to="/bass">About</Link></li>
							</ul>
						</div>

					</div>
				</div>

			</div>

		</div>
	)
}

export default Home