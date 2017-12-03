import React from 'react'

import { NavLink } from 'react-router-dom'

import './menu.css'

const Menu = props => (
	<div id="menu">
		<div className="menu-inner">
		
			<h1><span>Menu</span></h1>

			<div className="menu-split">
        
        <div className="menu-split-item menu-guitar">
          <h2>Guitar</h2>
          <div className="menu-links">
            <NavLink
              onClick={ () => props.handleHamburger() }
              to="/guitar/chords">Chords</NavLink>

            <NavLink
              onClick={ () => props.handleHamburger() }
              to="/guitar/scales">Scales</NavLink>

            <NavLink
              onClick={ () => props.handleHamburger() }
              to="/guitar/Songs">Songs</NavLink>
          </div>
        </div>

        <div className="menu-split-item menu-bass">
          <h2>Bass</h2>
          <div className="menu-links">
            <NavLink
              onClick={ () => props.handleHamburger() }
              to="/bass/chords">Chords</NavLink>

            <NavLink
              onClick={ () => props.handleHamburger() }
              to="/bass/scales">Scales</NavLink>

            <NavLink
              onClick={ () => props.handleHamburger() }
              to="/bass/Songs">Songs</NavLink>
          </div>
        </div>
        
      </div>
		
		</div>
	</div>
)

export default Menu