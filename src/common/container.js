import React from 'react'

import './css/container.css'

const Container = props => (
	<div id={props.id}>
		<div className="container container-class">
			{props.children}
		</div>
	</div>
)

export default Container