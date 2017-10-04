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
		const string = this.state.active ? ' is-active' : ''
		return (
			<button className={'hamburger hamburger--3dx' + string}
				onClick={this.handleClick}
				type="button">
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>
		)
	}
}

export default Hamburger