import React from 'react'

import FlatButton from 'material-ui/FlatButton'

import './css/heading.css'

const Heading = props => (
  <div className="heading">
		<FlatButton onClick={props.onClick}
			style={{
				borderRadius: '100%',
				margin: '0 5px 0 0',
				padding: '0',
				minWidth: 'auto'
			}}>
			<i onClick={props.onClick}
				className="material-icons">{props.active ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}</i>
		</FlatButton>
		<h1>{props.children}</h1>
  </div>
)

export default Heading