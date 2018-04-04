import React from 'react'

import Ad from '../../../common/ad'

import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'

const GuitarHome = props => (
	<div id="guitar-home">
		
		<div className="row">
			<div className="col-md-6">
				<h1>Learn Chords</h1>
				<p>Guitar chords shapes are a great way to start learning the guitar and are realtively easy to learn and pick up. Learn the basic chords that every guitaist should know which are common in many popular songs.</p>
				<Link to="/guitar/chords">
					<RaisedButton label="Learn Guitar Chords" backgroundColor="#F44336" labelColor="#fff" />
				</Link>
			</div>
			<div className="col-md-6">
				<h1>Learn Scales</h1>
				<p>Guitar chords shapes are a great way to start learning the guitar and are realtively easy to learn and pick up. Learn the basic chords that every guitaist should know.</p>
				<Link to="/guitar/scales">
					<RaisedButton label="Learn Guitar Scales" backgroundColor="#F44336" labelColor="#fff" />
				</Link>
			</div>
		</div>
		
		<div className="row">
			<div className="col-md-12">
				<Ad />
			</div>
		</div>
		
		<div className="row">
			<div className="col-md-12">
				<h1>Learn Exercises</h1>
				<p>Learn Guitar exercises that will improve your guitar playing skills.</p>
				<Link to="/guitar/exercises">
					<RaisedButton label="Learn Guitar Exercises" backgroundColor="#F44336" labelColor="#fff" />
				</Link>
			</div>
		</div>
		
	</div>
)

export default GuitarHome