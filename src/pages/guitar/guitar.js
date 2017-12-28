import React from 'react'

import GuitarCover from '../home/guitar-stock-photo.jpg'

import './guitar.css'

const Guitar = props => (
	<div id="guitar">
	
		<div className="guitar-header"
			style={{ backgroundImage: `url(${ GuitarCover })` }}>
		
			<div className="guitar-header-left">
				<h3>Learn</h3>
				<h1>Guitar</h1>
			</div>
			<div className="guitar-header-right">
				<p>86%</p>
				<h3>Completed</h3>
			</div>
			
		</div>
		
		<div className="guitar-body">
			<div className="container">
				<div className="row">
				
					<div className="guitar-heading">
						<i className="material-icons">stop</i>
						<h1>Scales</h1>
					</div>
					<div className="guitar-grid">
						<div className="guitar-grid-item">
							<h2>Major Scale Modes</h2>
							<h3>Learn the 7 major scale modes and all their different positions on the neck.</h3>
						</div>
						<div className="guitar-grid-item">
						
						</div>
						<div className="guitar-grid-item">
						
						</div>
					</div>
				
				</div>
			</div>
		</div>
	
	</div>
)

export default Guitar