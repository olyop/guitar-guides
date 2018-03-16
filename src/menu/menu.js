import React from 'react'

import { NavLink } from 'react-router-dom'
import './menu.css'

const Menu = props => (
	<div id="menu">
    
    <div onClick={props.handleHamburger}
      className="menu-background"></div>
		
    <div className="menu-slider">
			
			<ul>
				<li><NavLink to="/">Home</NavLink></li>
			</ul>
			
			<ul>
				<li>
					<NavLink to="/guitar">Guitar</NavLink>
					<ul>
						<li><NavLink to="/guitar/chords">Chords</NavLink></li>
						<li><NavLink to="/guitar/scales">Scales</NavLink></li>
						<li><NavLink to="/guitar/exercises">Exercises</NavLink></li>
						<li><NavLink to="/guitar/riffs">Riffs</NavLink></li>
						<li><NavLink to="/guitar/about">About</NavLink></li>
					</ul>
				</li>
			</ul>
			
			<ul>
				<li>
					<NavLink to="/bass">Bass</NavLink>
					<ul>
						<li><NavLink to="/bass/chords">Chords</NavLink></li>
						<li><NavLink to="/bass/scales">Scales</NavLink></li>
						<li><NavLink to="/bass/exercies">Exercies</NavLink></li>
						<li><NavLink to="/bass/riffs">Riffs</NavLink></li>
						<li><NavLink to="/bass/about">About</NavLink></li>
					</ul>
				</li>
			</ul>
			
			<ul>
				<li>
					<NavLink to="/theory">Theory</NavLink>
					<ul>
						<li><NavLink to="/theory/chords">Chords</NavLink></li>
						<li><NavLink to="/theory/scales">Scales</NavLink></li>
						<li><NavLink to="/theory/exercies">Exercies</NavLink></li>
						<li><NavLink to="/theory/riffs">Riffs</NavLink></li>
						<li><NavLink to="/theory/about">About</NavLink></li>
					</ul>
				</li>
			</ul>
			
			<ul>
				<li><NavLink to="/search">Search</NavLink></li>
				<li><NavLink to="/help">Help</NavLink></li>
				<li><NavLink to="/account">Account</NavLink></li>
				<li><NavLink to="/testing">Testing</NavLink></li>
			</ul>
			
    </div>
    
	</div>
)

export default Menu