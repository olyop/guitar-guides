import React from 'react'

import './hamburger.css'

class Hamburger extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			active: false
		}
		
		this.handleClick = this.handleClick.bind(this)
	}
	
	handleClick() {
		this.setState({ active: !this.state.active })
	}
	
	render() {
		const string = 
		return (
			
		)
	}
}

export default Hamburger