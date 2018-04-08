import React from 'react'

import './css/container.css'

const Container = props => (
	<div id={props.id} className={props.className}>
		<div className="container wrapper-class">
			{props.children}
		</div>
	</div>
)

export default Container