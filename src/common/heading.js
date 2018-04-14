import React from 'react'

import FlatButton from 'material-ui/FlatButton'

import './css/heading.css'

const Heading = props => (
  <div className="heading"
		style={props.style}>
		
		<FlatButton onClick={props.onClick}
			style={{
				borderRadius: '100%',
				margin: '0 5px 0 0',
				minWidth: 'auto',
				padding: '0'
			}}>
			<i onClick={props.onClick}
				className="material-icons">{props.active ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}</i>
		</FlatButton>
		
		<div className="heading-content">
			<div className="heading-heading">{props.children}</div>
			<div className="heading-subtitle">{props.subtitle}</div>
		</div>
		
  </div>
)

export default Heading