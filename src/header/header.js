import React from 'react'

import { Link, NavLink } from 'react-router-dom'

import './header.css'

const Header = props => (
	<div id="header">
		<div className="header-inner"
      style={{ justifyContent: props.isAccountLoggedIn ? 'space-between' : 'center' }}>
			
			{props.isAccountLoggedIn ? (
        <div className="header-section header-left">
          <div className="hamburger-container">

            <button
              className={'hamburger hamburger--3dx' + (props.appState.menu ? ' is-active' : '')}
              onClick={props.handleHamburger}
              type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>

          </div>
        </div>
      ) : null}

			<div className="header-section header-middle">
				<Link to="/">
          <h1><b>G</b>uitar <b>G</b>uides</h1>
        </Link>
			</div>

      {props.isAccountLoggedIn ? (
        <div className="header-section header-right">

          <div className="header-search">
            <div className="header-icon">
              <i className="material-icons">search</i>
            </div>
            <div className="header-search-text">{props.globalText.header.searchInputText}</div>
          </div>

          <div className="header-account">
						<NavLink to="/account"
							activeClassName="header-account-active">
							<div className="header-icon">
              	<i className="material-icons">account_circle</i>
            	</div>
						</NavLink>
          </div>

        </div>
      ) : null}
			
		</div>
	</div>
)

export default Header