import React from 'react'

import FlatButton from 'material-ui/FlatButton'

import './css/error.css'

class Error extends React.Component {
	constructor(props) {
		super(props)
		this.state = { log: false }
		this.toggleLog = this.toggleLog.bind(this)
	}
	toggleLog() { this.setState({ log: !this.state.log }) }
	render() {
		let buttonStyle = {
			borderRadius: '100%',
			margin: '0',
			minWidth: 'auto',
			padding: '5px',
			right: 0
		}
		return (
			<div className="error">
				<div className="error-header">
					<div className="error-header-left">
						<i className="material-icons"
							style={{ color: '#F44336' }}>error</i>
						<h1>{this.props.heading}</h1>
					</div>
					<div className="error-header-right">
						<FlatButton onClick={this.toggleLog}
							style={buttonStyle}>
							<i className="material-icons">{this.state.log ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i>
						</FlatButton>
					</div>
				</div>
				{this.props.subtitle ? <p>{this.props.subtitle}</p> : null}
				{this.state.log ? (
					<div>
						{this.props.apiError ? <pre>{JSON.stringify(this.props.apiError.response, null, 2)}</pre> : null}
					</div>
				) : null}
			</div>
		)
	}
}

export default Error