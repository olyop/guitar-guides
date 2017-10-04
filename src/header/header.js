import React from 'react'

import Hamburger from './hamburger/hamburger'
import './header.css'

const Header = props => (
	<div id="header">
		<div className="header-inner">
			
			<div className="header-section header-left">
				<Hamburger />
			</div>

			<div className="header-section header-middle">
				<h1>Guitar Guides</h1>
			</div>

			<div className="header-section header-right">
				<i className="material-icons">search</i>
			</div>
			
		</div>
	</div>
)

export default Header