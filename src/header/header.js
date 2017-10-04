import React from 'react'

import './header.css'

const Header = props => (
	<div id="header">
		<div className="header-inner">
			
			<div className="header-section header-left">
				<div className="hamburger-container">
					
					<button
						className={'hamburger hamburger--3dx' + (props.appState.drawer ? ' is-active' : '')}
						onClick={props.handleHamburger}
						type="button">
						<span className="hamburger-box">
							<span className="hamburger-inner"></span>
						</span>
					</button>
					
				</div>
				<div className="header-text">Home</div>
			</div>

			<div className="header-section header-middle">
				<a href="/">
					<h1><b>G</b>uitar <b>G</b>uides</h1>
				</a>
			</div>

			<div className="header-section header-right">
				<div className="header-search-container">
					<div className="header-search-icon">
						<i className="material-icons">search</i>
					</div>
					<div className="header-search-text">Search...</div>
				</div>
			</div>
			
		</div>
	</div>
)

export default Header