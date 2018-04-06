import React from 'react'

import './css/heading.css'

const Heading = props => (
  <div className="heading">
    <i onClick={props.onClick}
			className="material-icons">{props.active ? 'keyboard_arrow_down' : 'keyboard_arrow_right'}</i>
		<h1>{props.children}</h1>
  </div>
)

export default Heading