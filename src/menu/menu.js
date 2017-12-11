import React from 'react'

import { NavLink } from 'react-router-dom'

import './menu.css'

const Menu = props => (
	<div id="menu">
		<div className="menu-inner">

			<div className="menu-split">
        
        <div className="menu-split-item menu-guitar">
          <div className="menu-split-heading">
						<h2><span>Guitar</span></h2>
					</div>
          <div className="menu-links">
						<ul>
							<li>
								<NavLink
              		onClick={ () => props.handleHamburger() }
              		to="/guitar/chords">Chords</NavLink>
							</li>
							<li>
								<NavLink
									onClick={ () => props.handleHamburger() }
									to="/guitar/scales">Scales</NavLink>
							</li>
							<li>
								<NavLink
									onClick={ () => props.handleHamburger() }
									to="/guitar/Songs">Songs</NavLink>
							</li>
						</ul>
          </div>
        </div>

        <div className="menu-split-item menu-bass">
          <div className="menu-split-heading">
						<h2><span>Bass</span></h2>
					</div>
          <div className="menu-links">
						<ul>
							<li>
								<NavLink
              		onClick={ () => props.handleHamburger() }
              		to="/bass/chords">Chords</NavLink>
							</li>
							<li>
								<NavLink
									onClick={ () => props.handleHamburger() }
									to="/bass/scales">Scales</NavLink>
							</li>
							<li>
								<NavLink
									onClick={ () => props.handleHamburger() }
									to="/bass/Songs">Songs</NavLink>
							</li>
						</ul>
          </div>
        </div>
        
      </div>
		
		</div>
	</div>
)

export default Menu