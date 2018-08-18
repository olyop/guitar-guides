import React from 'react'

import { NavLink } from 'react-router-dom'
import './menu.css'

const Menu = props => (
	<div id="menu">

    <div onClick={props.handleHamburger}
      className="menu-background"></div>

    <div className="menu-slider">

			<div className="menu-buttons">
				<NavLink to="/guitar" onClick={props.handleHamburger} title="Guitar">
					<i className="material-icons">bookmark</i>
					<p>Guitar</p>
				</NavLink>
				<div className="menu-sub">
					<NavLink to="/guitar/chords" onClick={props.handleHamburger} className="menu-slider-sub-button" title="Guitar Chords">
						<i className="material-icons">remove</i>
						<p>Chords</p>
					</NavLink>
					<NavLink to="/guitar/scales" onClick={props.handleHamburger} className="menu-slider-sub-button" title="Guitar Scales">
						<i className="material-icons">remove</i>
						<p>Scales</p>
					</NavLink>
					<NavLink to="/guitar/exercises" onClick={props.handleHamburger} className="menu-slider-sub-button" title="Guitar Exercises">
						<i className="material-icons">remove</i>
						<p>Exercies</p>
					</NavLink>
					<NavLink to="/guitar/riffs" onClick={props.handleHamburger} className="menu-slider-sub-button" title="Guitar Riffs">
						<i className="material-icons">remove</i>
						<p>Riffs</p>
					</NavLink>
					<NavLink to="/guitar/about" onClick={props.handleHamburger} className="menu-slider-sub-button" title="Guitar About">
						<i className="material-icons">remove</i>
						<p>About</p>
					</NavLink>
				</div>
				<NavLink to="/bass" onClick={props.handleHamburger} title="Bass">
					<i className="material-icons">bookmark</i>
					<p>Bass</p>
				</NavLink>
				<div className="menu-sub">
					<NavLink to="/bass/scales" onClick={props.handleHamburger} className="menu-slider-sub-button" title="Bass Scales">
						<i className="material-icons">remove</i>
						<p>Scales</p>
					</NavLink>
					<NavLink to="/bass/exercises" onClick={props.handleHamburger} className="menu-slider-sub-button" title="Bass Exercies">
						<i className="material-icons">remove</i>
						<p>Exercies</p>
					</NavLink>
					<NavLink to="/bass/riffs" onClick={props.handleHamburger} className="menu-slider-sub-button" title="Bass Riffs">
						<i className="material-icons">remove</i>
						<p>Riffs</p>
					</NavLink>
					<NavLink to="/bass/about" onClick={props.handleHamburger} className="menu-slider-sub-button" title="Bass About">
						<i className="material-icons">remove</i>
						<p>About</p>
					</NavLink>
				</div>
				<NavLink to="/search" onClick={props.handleHamburger} title="Search">
					<i className="material-icons">search</i>
					<p>Search</p>
				</NavLink>
				<NavLink to="/help" onClick={props.handleHamburger} title="Help">
					<i className="material-icons">help</i>
					<p>Help</p>
				</NavLink>
				<NavLink to="/account" onClick={props.handleHamburger} title="Account">
					<i className="material-icons">account_circle</i>
					<p>Account</p>
				</NavLink>
				<NavLink to="/testing" onClick={props.handleHamburger} title="Testing">
					<i className="material-icons">trending_up</i>
					<p>Testing</p>
				</NavLink>
			</div>

    </div>

	</div>
)

export default Menu
