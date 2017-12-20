import React from 'react'

import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import axios from 'axios'

import './account.css'

class Account extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			newAccountScreen: false,
      accounts: null
		}
		
		this.toggleCreateAccountScreen = this.toggleCreateAccountScreen.bind(this)
    this.addAccount = this.addAccount.bind(this)
	}
	
	toggleCreateAccountScreen() {
		this.setState({ newAccountScreen: !this.state.newAccountScreen })
	}
  
  componentDidMount() {
    axios.get('http://localhost:3001/users')
      .then(res => {
        const accounts = res.data
        this.setState({ accounts })
      })
      .catch(error => {
        console.log(error)
        this.setState({ accounts: 'error' })
      })
  }
  
  addAccount(name, experience) {
    axios.post('http://localhost:3001/users', {
      name: name,
      experience: experience
    })
    .then(response => {
      this.setState({ 
        accounts: this.state.accounts.concat([response.data])
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
	
	render() {
    
    let accountList
    
    if (this.state.accounts === null) {
      accountList = (
        <p>Loading...</p>
      )
    } else if (this.state.accounts === 'error') {
      accountList = (
        <p>Error</p>
      )
    } else if (this.state.accounts.length === 0) {
      accountList = (
        <p>No accounts</p>
      )
    } else if (this.state.accounts.length > 0) {
      accountList = this.state.accounts.map(account => {
        
        let exp
        switch (account.experience) {
          case 0:
            exp = "Beginner"
            break
          case 1:
            exp = "Intermediate"
            break
          case 2:
            exp = "Expert"
            break
          default: 
            exp = ""
        }
        
        return (
          <div key={account.id}
            className="account-list-item">
            <i className="material-icons">account_circle</i>
            <div className="account-list-item-content">
              <h2>{account.name}</h2>
              <h4>{exp}</h4>
            </div>
          </div>
        ) 
      })
    }
     
		return (
			<div id="account">
				<div className="account-screen">
					
					<h1>Accounts</h1>
					<p>Please login to or create an account to continue in the app.</p>
					
					{this.state.newAccountScreen ? (
						<CreateAccount
							toggleCreateAccountScreen={this.toggleCreateAccountScreen}
              addAccount={this.addAccount} />
					) : (
						<div className="account-list">
              
              {accountList}
							
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
					floatingLabelStyle={{ fontWeight: '500', color: '#333' }}
					floatingLabelFocusStyle={{ fontWeight: '700' }}
          
          floatingLabelFixed
					floatingLabelText="Name" fullWidth />
				
				<SelectField
					value={this.state.experience}
					onChange={this.handleExperience}
          errorText={this.state.experienceErrorText}
					
					underlineFocusStyle={{ borderColor: '#BDBDBD' }}
					floatingLabelStyle={{ fontWeight: '500', color: '#333' }}
					floatingLabelFocusStyle={{ fontWeight: '700' }}
          
          floatingLabelText="Experience"
          floatingLabelFixed fullWidth>
					<MenuItem value={0} primaryText="Beginner" />
					<MenuItem value={1} primaryText="Intermediate" />
					<MenuItem value={2} primaryText="Advanced" />
				</SelectField>
				
				<div className="account-create-buttons">
          <RaisedButton
            style={{ marginRight: '10px' }}
            backgroundColor={'#212121'}
            labelColor={'#fff'}
            onClick={this.handleAdd}
            icon={<i className="material-icons" style={{ color: '#fff' }}>add</i>}
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