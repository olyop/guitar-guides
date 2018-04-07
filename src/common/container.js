import React from 'react'

import './css/container.css'

const Container = props => (
	<div id={props.id} className={props.className}>
		<div className="container container-class">
			{props.children}
		</div>
	</div>
)

export default Container