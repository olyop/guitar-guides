import React from 'react'

import includes from 'lodash/includes'
import maliciousSubStrings from '../database/malicious-sub-strings'

import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

import './create-account.css'

class CreateAccount extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			name: '',
			surname: '',
			experience: null,
      nameErrorText: null,
      surnameErrorText: null,
      experienceErrorText: null
		}
		
		this.handleName = this.handleName.bind(this)
		this.handleSurname = this.handleSurname.bind(this)
		this.handleExperience = this.handleExperience.bind(this)
		
    this.handleAdd = this.handleAdd.bind(this)
	}
	
	handleName(event) {
		this.setState({
			name: String(event.target.value)
		})
	}
	
	handleSurname(event) {
		this.setState({
			surname: String(event.target.value)
		})
	}
	
	handleExperience(event, index, value) {
		this.setState({ experience: value })
	}
  
  handleAdd() {
    
		// Check for malicious code
		let flag = false
		
		for (let i = 0; i < maliciousSubStrings.length; i++) {
			if (includes(this.state.name, maliciousSubStrings[i])) {
				this.setState({ nameErrorText: 'Please enter a valid name.' })
				flag = true
			}
			if (includes(this.state.surname, maliciousSubStrings[i])) {
				this.setState({ surnameErrorText: 'Please enter a valid surname.' })
				flag = true
			}
		}
		
		// Exit sending data if potentially malicoius content is found
		if (flag) { return }
		
    // Validate form data
    let isNameEmpty = this.state.name === ''
    let isNameTooLong = this.state.name.length > 10
		let isSurnameEmpty = this.state.surname === ''
    let isSurnameTooLong = this.state.surname.length > 10
    let isExperienceEmpty = this.state.experience === null
    
		// Check first name input
    if (isNameEmpty) {
      this.setState({ nameErrorText: 'Please enter your name.' })
    } else if (isNameTooLong) {
      this.setState({ nameErrorText: 'Your name is to long.' })
    } else {
      this.setState({ nameErrorText: null })
    }
		
		// Check last name input
		if (isSurnameEmpty) {
      this.setState({ surnameErrorText: 'Please enter your surname.' })
    } else if (isSurnameTooLong) {
      this.setState({ surnameErrorText: 'Your surname is to long.' })
    } else {
       this.setState({ surnameErrorText: null })
    }
		
		// Check experience input
    if (isExperienceEmpty) {
      this.setState({ experienceErrorText: 'Please enter your experience level.' })
    } else {
      this.setState({ experienceErrorText: null })
    }
    
    // Send data
    if (isNameEmpty === false &&
			isNameTooLong === false &&
			isSurnameEmpty === false &&
			isSurnameTooLong === false &&
			isExperienceEmpty === false) {
      this.props.addAccount(this.state.name.trim(), this.state.surname.trim(), this.state.experience)
      this.props.toggleCreateAccountScreen()
    }
  }
	
	render() {
		return (
			<div className="account-create">
				
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					
					<TextField
						value={this.state.name}
						onChange={this.handleName}
						errorText={this.state.nameErrorText}

						style={{ width: '48%' }}
						underlineFocusStyle={{ borderColor: '#BDBDBD' }}
						floatingLabelStyle={{ fontWeight: '400', color: '#333', fontSize: '20px' }}
						floatingLabelFocusStyle={{ fontWeight: '700' }}
						errorStyle={{ color: '#F44336' }}

						floatingLabelFixed
						floatingLabelText={this.props.globalText.accounts.createAccountPage.nameLabelText}>
					</TextField>

					<TextField
						value={this.state.surname}
						onChange={this.handleSurname}
						errorText={this.state.surnameErrorText}

						style={{ width: '48%' }}
						underlineFocusStyle={{ borderColor: '#BDBDBD' }}
						floatingLabelStyle={{ fontWeight: '400', color: '#333', fontSize: '20px' }}
						floatingLabelFocusStyle={{ fontWeight: '700' }}
						errorStyle={{ color: '#F44336' }}

						floatingLabelFixed
						floatingLabelText={this.props.globalText.accounts.createAccountPage.surnameLabelText}>
					</TextField>
					
				</div>
				
				<SelectField
					value={this.state.experience}
					onChange={this.handleExperience}
          errorText={this.state.experienceErrorText}
					
					underlineFocusStyle={{ borderColor: '#BDBDBD' }}
					floatingLabelStyle={{ fontWeight: '400', color: '#333', fontSize: '20px' }}
					floatingLabelFocusStyle={{ fontWeight: '700' }}
					errorStyle={{ color: '#F44336' }}
          
          floatingLabelFixed fullWidth
					floatingLabelText={this.props.globalText.accounts.createAccountPage.expLevelLabelText}>
					<MenuItem value={0}
						primaryText={this.props.globalText.accounts.expLevels[0]} />
					<MenuItem value={1}
						primaryText={this.props.globalText.accounts.expLevels[1]} />
					<MenuItem value={2}
						primaryText={this.props.globalText.accounts.expLevels[2]} />
				</SelectField>
				
				<div className="account-create-buttons">
					
          <RaisedButton
            onClick={this.handleAdd}
						
            backgroundColor={'#212121'}
            labelColor={'#fff'}
						style={{ marginBottom: '10px' }}
						
            fullWidth icon={(
							<i className="material-icons"
								style={{ color: '#fff', fontSize: '25px' }}>done</i>
						)}
            label={this.props.globalText.accounts.createAccountPage.addNewAccountButtonText}>
					</RaisedButton>
					
					<RaisedButton
            onClick={this.props.toggleCreateAccountScreen}
						
            backgroundColor={'#F44336'}
            labelColor={'#fff'}
						
            fullWidth icon={(
							<i className="material-icons"
								style={{ color: '#fff', fontSize: '25px' }}>close</i>
						)}
            label={this.props.globalText.accounts.createAccountPage.cancelNewAccountButtonText}>
					</RaisedButton>
					
				</div>
				
			</div>
		)
	}
}

export default CreateAccount