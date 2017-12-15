import React from 'react'

import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import './account.css'

class Account extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			newAccountScreen: true
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
			name: '',
			experience: null,
      nameErrorText: null,
      experienceErrorText: null
		}
		
		this.handleName = this.handleName.bind(this)
		this.handleExperience = this.handleExperience.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
	}
	
	handleName(event) {
		this.setState({
			name: event.target.value
		})
	}
	
	handleExperience(event, index, value) {
		this.setState({ experience: value })
	}
  
  handleAdd() {
    
    // Validate form data
    let isNameEmpty = this.state.name === ''
    let isNameTooLong = this.state.name.length > 10
    let isExperienceEmpty = this.state.experience === null
    
    if (isNameEmpty) {
      this.setState({ nameErrorText: 'Please enter your name.' })
    } else if (isNameTooLong) {
      this.setState({ nameErrorText: 'Your name is to long.' })
    } else {
       this.setState({ nameErrorText: null })
    }
    if (isExperienceEmpty) {
      this.setState({ experienceErrorText: 'Please enter your experience.' })
    } else {
      this.setState({ experienceErrorText: null })
    }
    
    // Send data
    if (isNameEmpty === false && isNameTooLong === false && isExperienceEmpty === false) {
      
    }
  }
	
	render() {
		return (
			<div className="account-create">
				
				<TextField
					value={this.state.name}
          onChange={this.handleName}
          errorText={this.state.nameErrorText}
					
					underlineFocusStyle={{ borderColor: '#BDBDBD' }}
					floatingLabelFocusStyle={{ color: '#333' }}
					floatingLabelStyle={{ fontWeight: '500' }}
          
          floatingLabelFixed
					floatingLabelText="Name" fullWidth />
				
				<SelectField
					value={this.state.experience}
					onChange={this.handleExperience}
          errorText={this.state.experienceErrorText}
          
					floatingLabelText="Experience"
					floatingLabelStyle={{ fontWeight: '500' }}
					floatingLabelFocusStyle={{ color: '#333' }}
					underlineFocusStyle={{ borderColor: '#BDBDBD' }}
          
          floatingLabelFixed
					fullWidth>
					<MenuItem value={1} primaryText="Beginner" />
					<MenuItem value={2} primaryText="Intermediate" />
					<MenuItem value={3} primaryText="Advanced" />
				</SelectField>
				
				<div className="account-create-buttons">
          <RaisedButton
            style={{ marginRight: '10px' }}
            onClick={this.handleAdd}
            icon={<i className="material-icons">add</i>}
            label="Add" />
          <FlatButton
					onClick={this.props.toggleCreateAccountScreen}
            label="Cancel" style={{  }} />
				</div>
				
			</div>
		)
	}
}

export default Account