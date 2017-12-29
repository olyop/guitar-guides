import React from 'react'

import { Link } from 'react-router-dom'

// Import Images
import guitarStock from './guitar-stock-photo.jpg'
import bassStock from './bass-stock-photo.jpg'
import musicStock from './music-stock-photo.jpg'

import './home.css'

const Home = props => (
	<div id="home">
		<div className="home-cards">
			
			<div className="home-section home-left">
				<div className="home-section-inner">
					<div className="home-section-image"
						style={{ backgroundImage: 'url('+ guitarStock + ')' }} />
					<h2>Learn</h2>
					<h1><Link to="/guitar">Guitar</Link></h1>
					<div className="home-section-line" />
					<div className="home-section-content">
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ul>
					</div>

				</div>
			</div>

			<div className="home-section home-middle">
				<div className="home-section-inner">

					<div className="home-section-image"
						style={{ backgroundImage: 'url('+ bassStock + ')' }} />
					<h2>Learn</h2>
					<h1><Link to="/bass">Bass</Link></h1>
					<div className="home-section-line" />
					<div className="home-section-content">
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ul>
					</div>

				</div>
			</div>

			<div className="home-section home-right">
				<div className="home-section-inner">

					<div className="home-section-image"
						style={{ backgroundImage: 'url('+ musicStock + ')' }} />
					<h2>Learn</h2>
					<h1><Link to="/theory">Theory</Link></h1>
					<div className="home-section-line" />
					<div className="home-section-content">
						<ul>
							<li>Item 1</li>
							<li>Item 2</li>
							<li>Item 3</li>
							<li>Item 4</li>
						</ul>
					</div>

				</div>
			</div>
			
		</div>
	</div>
)

export default Home