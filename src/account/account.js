import React from 'react'

import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

import './account.css'

class Account extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			newAccountScreen: false
		}
		
		this.toggleCreateAccountScreen = this.toggleCreateAccountScreen.bind(this)
	}
	
	toggleCreateAccountScreen() {
		this.setState({ newAccountScreen: !this.state.newAccountScreen })
	}
	
	render() {
		return (
			<div id="account">

				<div className="account-screen">
					
					<h1>Accounts</h1>
					<p>Please login to or create an account to continue in the app.</p>
					
					{this.state.newAccountScreen ? (
						<CreateAccount
							toggleCreateAccountScreen={this.toggleCreateAccountScreen} />
					) : (
						<div className="account-list">
							<div className="account-list-item"
								onClick={this.props.logIn}>
								<i className="material-icons">account_circle</i>
								<div className="account-list-item-content">
									<h2>Barack Obama</h2>
									<h4>50% Completed</h4>
								</div>
							</div>
							<div className="account-list-item"
								onClick={this.toggleCreateAccountScreen}>
								<i className="material-icons">add</i>
								<div className="account-list-item-content">
									<h3>Add Account</h3>
								</div>
							</div>
						</div>
					)}
					
				</div>

			</div>
		)
	}
}

class CreateAccount extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			nameVal: '',
			experienceVal: null
		}
		
		this.handleName = this.handleName.bind(this)
		this.handleExperience = this.handleExperience.bind(this)
	}
	
	handleName(event) {
		this.setState({
			nameVal: event.target.value
		})
	}
	
	handleExperience(event, index, value) {
		this.setState({ experienceVal: value })
	}
	
	render() {
		return (
			<div className="account-create">
				
				<div className="account-create-close"
					onClick={this.props.toggleCreateAccountScreen}>
					<i className="material-icons">close</i>
				</div>
				
				<TextField
					value={this.state.nameVal}
          onChange={this.handleName}
					
					underlineFocusStyle={{ borderColor: '#BDBDBD' }}
					floatingLabelFocusStyle={{ color: '#333' }}
					floatingLabelStyle={{ fontWeight: '500' }}
					floatingLabelText="Name" fullWidth />
				
				<SelectField
					floatingLabelText="Experience"
					floatingLabelStyle={{ fontWeight: '500' }}
					floatingLabelFocusStyle={{ color: '#333' }}
					underlineFocusStyle={{ borderColor: '#BDBDBD' }}
					value={this.state.experienceVal}
					onChange={this.handleExperience}
					fullWidth>
					<MenuItem value={1} primaryText="Beginner" />
					<MenuItem value={2} primaryText="Intermediate" />
					<MenuItem value={3} primaryText="Advanced" />
				</SelectField>
				
				<div className="account-create-buttons">
					<RaisedButton label="Add" fullWidth />
				</div>
				
			</div>
		)
	}
}

export default Account