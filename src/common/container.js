import React from 'react'

const Container = props => (
	<div id={props.id}>
		<div className="container">
			{props.children}
		</div>
	</div>
)

export default Container