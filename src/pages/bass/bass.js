import React from 'react'

import BassCover from '../../media/bass-stock-photo.jpg'

// Import React Router
import { NavLink, Route } from 'react-router-dom'

import './bass.css'

const Bass = props => (
	<div id="bass" className="page">
	
		<div className="sub-header"
			style={{ backgroundImage: `url(${BassCover})` }}>
		
			<div className="container">
				<div className="container-inner">
					<div className="sub-header-left">
						<h1>Bass</h1>
					</div>
					<div className="sub-header-right">
						<p>86%</p>
						<h3>Completed</h3>
				</div>
				</div>
			</div>
			
		</div>
		
		<div className="sub-body">
			
			<div className="sub-nav">
				<div className="container">
					<div className="sub-nav-inner">
						
						<NavLink to="/guitar" exact
							activeClassName="sub-nav-item-active">
							<div className="sub-nav-strip"></div>
							<i className="material-icons">home</i>
						</NavLink>
						
						<NavLink to="/guitar/chords"
							activeClassName="sub-nav-item-active">
							<div className="sub-nav-strip"></div>
							<p>Chords</p>
						</NavLink>
						
						<NavLink to="/guitar/scales"
							activeClassName="sub-nav-item-active">
							<div className="sub-nav-strip"></div>
							<p>Scales</p>
						</NavLink>
						
						<NavLink to="/guitar/riffs"
							activeClassName="sub-nav-item-active">
							<div className="sub-nav-strip"></div>
							<p>Riffs</p>
						</NavLink>
						
						<NavLink to="/guitar/about"
							activeClassName="sub-nav-item-active">
							<div className="sub-nav-strip"></div>
							<p>About</p>
						</NavLink>
						
					</div>
				</div>
			</div>
			
			<div id="sub-content">
				<div className="container">
					
					<Route path={`${props.match.path}`} exact render={ () => (
							<p>Hello</p>
					)} />
					
					<Route path={`${props.match.path}/chords`} exact render={ () => (
							<p>Hello</p>
					)} />
				
					<Route path={`${props.match.path}/scales`} exact render={ () => (
							<p>Hello</p>
					)} />
					
					<Route path={`${props.match.path}/riffs`} exact render={ () => (
							<p>Hello</p>
					)} />
					
					<Route path={`${props.match.path}/about`} exact render={ () => (
							<p>Hello</p>
					)} />
					
					<Route path={`${props.match.path}/settings`} exact render={ () => (
							<p>Hello</p>
					)} />
				
				</div>
			</div>
	
	</div>
	</div>
)

export default Bass