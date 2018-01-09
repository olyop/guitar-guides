import React from 'react'

import GuitarCover from '../../media/guitar-stock-photo.jpg'

import { NavLink } from 'react-router-dom'

import './guitar.css'

const Guitar = props => (
	<div id="guitar">
	
		<div className="guitar-header"
			style={{ backgroundImage: `url(${ GuitarCover })` }}>
		
			<div className="container">
				<div className="container-inner">
					<div className="guitar-header-left">
						<h1>Guitar</h1>
					</div>
					<div className="guitar-header-right">
						<p>86%</p>
						<h3>Completed</h3>
				</div>
				</div>
			</div>
			
		</div>
		
		<div className="guitar-body">
			
			<div className="guitar-nav">
				<div className="container">
					<div className="guitar-nav-inner">
						
						<NavLink to="/guitar" exact
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<i className="material-icons">home</i>
						</NavLink>
						
						<NavLink to="/guitar/scales"
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<p>Scales</p>
						</NavLink>
						
						<NavLink to="/guitar/chords"
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<p>Chords</p>
						</NavLink>
						
						<NavLink to="/guitar/theory"
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<p>Theory</p>
						</NavLink>
						
						<NavLink to="/guitar/exercises"
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<p>Exercises</p>
						</NavLink>
						
						<NavLink to="/guitar/about"
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<p>About</p>
						</NavLink>
						
					</div>
				</div>
			</div>
			
			<div className="guitar-content">
				<div className="container">Content</div>
			</div>
			
		</div>
	
	</div>
)

export default Guitar