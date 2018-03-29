import React from 'react'

import './css/error.css'

class Error extends React.Component {
	constructor(props) {
		super(props)
		this.state = { log: false }
		this.toggleLog = this.toggleLog.bind(this)
	}
	toggleLog() { this.setState({ log: !this.state.log }) }
	render() {
		return (
			<div className="error">
				<div className="error-header">
					<i className="material-icons"
					style={{ color: '#F44336' }}>error</i>
					<h1>Error - {this.props.error.response.status} {this.props.error.response.statusText}</h1>
				</div>
				<pre>{JSON.stringify(this.props.error.response, null, 2)}</pre>
			</div>
		)
	}
}

export default Error