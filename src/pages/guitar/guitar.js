import React from 'react'

import GuitarCover from '../../media/guitar-stock-photo.jpg'

// Import React Router
import { NavLink, Route } from 'react-router-dom'

// Import Guitar Pages
import GuitarHome from './guitar-pages/home'
import GuitarScales from './guitar-pages/scales'
import GuitarChords from './guitar-pages/chords'
import GuitarExercises from './guitar-pages/exercises'
import GuitarRiffs from './guitar-pages/riffs'
import GuitarAbout from './guitar-pages/about'
import GuitarSettings from './guitar-pages/settings'

// Import CSS
import './guitar.css'
import './guitar-pages.css'

const Guitar = props => (
	<div id="guitar" className="page">
	
		<div className="guitar-header"
			style={{ backgroundImage: `url(${GuitarCover})` }}>
		
			<div className="container">
				<div className="container-inner">
					<div className="guitar-header-left">
						<h1>Guitar</h1>
					</div>
					<div className="guitar-header-right">
						<p>86%</p>
						<h3>Completed</h3>
				</div>
				</div>
			</div>
			
		</div>
		
		<div className="guitar-body">
			
			<div className="guitar-nav">
				<div className="container">
					<div className="guitar-nav-inner">
						
						<NavLink to="/guitar" exact
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<i className="material-icons">home</i>
						</NavLink>
						
						<NavLink to="/guitar/chords"
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<p>Chords</p>
						</NavLink>
						
						<NavLink to="/guitar/scales"
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<p>Scales</p>
						</NavLink>
						
						<NavLink to="/guitar/exercises"
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<p>Exercises</p>
						</NavLink>
						
						<NavLink to="/guitar/riffs"
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<p>Riffs</p>
						</NavLink>
						
						<NavLink to="/guitar/about"
							activeClassName="guitar-nav-item-active">
							<div className="guitar-nav-strip"></div>
							<p>About</p>
						</NavLink>
						
					</div>
				</div>
			</div>
			
			<div id="guitar-content">
				<div className="container">
					
					<Route path={`${props.match.path}`} exact render={ ({ match }) => (
						<GuitarHome />
					)} />
					
					<Route path={`${props.match.path}/chords`} exact render={ ({ match }) => (
						<GuitarChords appState={props.appState}
							globalText={props.globalText}
              theoryData={props.theoryData}
              updateProgressChords={props.updateProgressChords} />
					)} />
				
					<Route path={`${props.match.path}/scales`} exact render={ ({ match }) => (
						<GuitarScales appState={props.appState}
							globalText={props.globalText}
							theoryData={props.theoryData}
							scalesData={props.scalesData} />
					)} />
					
					<Route path={`${props.match.path}/exercises`} exact render={ ({ match }) => (
						<GuitarExercises />
					)} />
					
					<Route path={`${props.match.path}/riffs`} exact render={ ({ match }) => (
						<GuitarRiffs />
					)} />
					
					<Route path={`${props.match.path}/about`} exact render={ ({ match }) => (
						<GuitarAbout />
					)} />
					
					<Route path={`${props.match.path}/settings`} exact render={ ({ match }) => (
						<GuitarSettings />
					)} />
				
				</div>
			</div>
			
		</div>
	
	</div>
)

export default Guitar