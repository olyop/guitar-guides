import React from 'react'

import axios from 'axios'
import CreateAccount from './create-account'

import './accounts.css'

class Accounts extends React.Component {
	
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
  
	// Recieve Accounts from API
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
			this.setState({ accounts: 'error' })
    })
  }
	
	render() {
    
		// Determine and render the status of the accounts data
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
            exp = this.props.globalText.accounts.expLevels[0]
            break
          case 1:
            exp = this.props.globalText.accounts.expLevels[1]
            break
          case 2:
            exp = this.props.globalText.accounts.expLevels[2]
            break
          default: 
            exp = ""
        }
        
        return (
          <div key={account.id}
						onClick={() => this.props.logIn(account)}
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
					
					<h1>{this.props.globalText.accounts.heading}</h1>
					<p>{this.props.globalText.accounts.subtitle}</p>
					
					{this.state.newAccountScreen ? (
						<CreateAccount
							globalText={this.props.globalText}
							toggleCreateAccountScreen={this.toggleCreateAccountScreen}
              addAccount={this.addAccount} />
					) : (
						<div className="account-list">
              
              {accountList}
							
							<div className="account-list-item"
								onClick={this.toggleCreateAccountScreen}>
								<i className="material-icons">add</i>
								<div className="account-list-item-content">
									<h3>{this.props.globalText.accounts.addNewAccountButton}</h3>
								</div>
							</div>
							
						</div>
					)}
					
				</div>
			</div>
		)
	}
}

export default Accounts