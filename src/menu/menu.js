import React from 'react'

import { NavLink } from 'react-router-dom'
import './menu.css'

const Menu = props => (
	<div id="menu">
    
    <div onClick={props.handleHamburger}
      className="menu-background"></div>
		
    <div className="menu-slider">
			
			<ul>
				<li><NavLink to="/" onClick={props.handleHamburger}>Home</NavLink></li>
			</ul>
			
			<ul>
				<li>
					<NavLink to="/guitar">Guitar</NavLink>
					<ul>
						<li><NavLink to="/guitar/chords" onClick={props.handleHamburger}>Chords</NavLink></li>
						<li><NavLink to="/guitar/scales" onClick={props.handleHamburger}>Scales</NavLink></li>
						<li><NavLink to="/guitar/exercises" onClick={props.handleHamburger}>Exercises</NavLink></li>
						<li><NavLink to="/guitar/riffs" onClick={props.handleHamburger}>Riffs</NavLink></li>
						<li><NavLink to="/guitar/about" onClick={props.handleHamburger}>About</NavLink></li>
					</ul>
				</li>
			</ul>
			
			<ul>
				<li>
					<NavLink to="/bass" onClick={props.handleHamburger}>Bass</NavLink>
					<ul>
						<li><NavLink to="/bass/chords" onClick={props.handleHamburger}>Chords</NavLink></li>
						<li><NavLink to="/bass/scales" onClick={props.handleHamburger}>Scales</NavLink></li>
						<li><NavLink to="/bass/exercies" onClick={props.handleHamburger}>Exercies</NavLink></li>
						<li><NavLink to="/bass/riffs" onClick={props.handleHamburger}>Riffs</NavLink></li>
						<li><NavLink to="/bass/about" onClick={props.handleHamburger}>About</NavLink></li>
					</ul>
				</li>
			</ul>
			
			<ul>
				<li>
					<NavLink to="/theory" onClick={props.handleHamburger}>Theory</NavLink>
					<ul>
						<li><NavLink to="/theory/chords" onClick={props.handleHamburger}>Chords</NavLink></li>
						<li><NavLink to="/theory/scales" onClick={props.handleHamburger}>Scales</NavLink></li>
						<li><NavLink to="/theory/exercies" onClick={props.handleHamburger}>Exercies</NavLink></li>
						<li><NavLink to="/theory/riffs" onClick={props.handleHamburger}>Riffs</NavLink></li>
						<li><NavLink to="/theory/about" onClick={props.handleHamburger}>About</NavLink></li>
					</ul>
				</li>
			</ul>
			
			<ul>
				<li><NavLink to="/search" onClick={props.handleHamburger}>Search</NavLink></li>
				<li><NavLink to="/help" onClick={props.handleHamburger}>Help</NavLink></li>
				<li><NavLink to="/account" onClick={props.handleHamburger}>Account</NavLink></li>
				<li><NavLink to="/testing" onClick={props.handleHamburger}>Testing</NavLink></li>
			</ul>
			
    </div>
    
	</div>
)

export default Menu