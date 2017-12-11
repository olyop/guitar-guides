import React from 'react'

import guitarStock from './guitar-stock-photo.jpg'
import bassStock from './bass-stock-photo.jpg'
import musicStock from './music-stock-photo.jpg'

import './home.css'

const Home = props => (
	<div id="home">

		<div className="home-section home-left">
			<div className="home-section-inner"
				style={{ backgroundImage: 'url('+ guitarStock + ')' }}>
					<h2>Learn</h2>
					<h1>Guitar</h1>
			</div>
		</div>
		
		<div className="home-section home-middle">
			<div className="home-section-inner"
				style={{ backgroundImage: 'url('+ bassStock + ')' }}>
					<h2>Learn</h2>
					<h1>Bass</h1>
			</div>
		</div>
		
		<div className="home-section home-right">
			<div className="home-section-inner"
				style={{ backgroundImage: 'url('+ musicStock + ')' }}>
					<h2>Learn</h2>
					<h1>Music</h1>
			</div>
		</div>

	</div>
)

export default Home