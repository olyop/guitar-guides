import React from 'react'

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
    
		// Check name input
    if (isNameEmpty) {
      this.setState({ nameErrorText: 'Please enter your name.' })
    } else if (isNameTooLong) {
      this.setState({ nameErrorText: 'Your name is to long.' })
    } else {
       this.setState({ nameErrorText: null })
    }
		
		// Check experience input
    if (isExperienceEmpty) {
      this.setState({ experienceErrorText: 'Please enter your experience level.' })
    } else {
      this.setState({ experienceErrorText: null })
    }
    
    // Send data
    if (isNameEmpty === false && isNameTooLong === false && isExperienceEmpty === false) {
      this.props.addAccount(this.state.name, this.state.experience)
      this.props.toggleCreateAccountScreen()
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
					floatingLabelStyle={{ fontWeight: '400', color: '#333', fontSize: '20px' }}
					floatingLabelFocusStyle={{ fontWeight: '700' }}
					errorStyle={{ color: '#F44336' }}
          
          floatingLabelFixed fullWidth
					floatingLabelText={this.props.globalText.accounts.createAccountPage.nameLabelText}>
				</TextField>
				
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
						
            style={{ marginRight: '10px' }}
            backgroundColor={'#212121'}
            labelColor={'#fff'}
						
            icon={(
							<i className="material-icons"
								style={{ color: '#fff', fontSize: '25px' }}>done</i>
						)}
            label={this.props.globalText.accounts.createAccountPage.addNewAccountButtonText}>
					</RaisedButton>
					
					<RaisedButton
            onClick={this.props.toggleCreateAccountScreen}
						
            backgroundColor={'#F44336'}
            labelColor={'#fff'}
						
            icon={(
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