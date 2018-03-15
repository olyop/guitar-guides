import React from 'react'

import { NavLink } from 'react-router-dom'
import './menu.css'

const Menu = props => (
	<div id="menu">
    
    <div onClick={props.handleHamburger}
      className="menu-background"></div>
		
    <div className="menu-slider">
      <div className="menu-top">

        <div className="menu-top-section">

        </div>

        <div className="menu-top-section">

        </div>

        <div className="menu-top-section">

        </div>

      </div>
    </div>
    
	</div>
)

export default Menu