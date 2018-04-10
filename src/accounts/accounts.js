import React from 'react'

import axios from 'axios'
import moment from 'moment'
import accountTemplate from '../database/account-template'
import makeId from '../functions/make-id'

import SadFace from '../common/sad-face'
import CreateAccount from './create-account'
import Loading from '../common/loading'

import './accounts.css'

const AccountList = props => {
  if (props.accounts === null) {
    return <Loading />
  } else if (props.accounts === 'error') {
    return <p>Error</p>
  } else if (props.accounts.length === 0) {
    return <SadFace>No Accounts.</SadFace>
  } else if (props.accounts.length > 0) {
    return props.accounts.map(account => (
      <div key={account.id}
        onClick={() => props.logIn(account)}
        className="account-list-item">
        <i className="material-icons">account_circle</i>
        <div className="account-list-item-content">
          <h2>{account.name} {account.surname	}</h2>
          <h4>{props.globalText.accounts.expLevels[account.experience]}</h4>
        </div>
      </div>
    ))
  }
}

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
		this.setState({ newAccountScreen: !this.state.newAccountScreen })	}
  
	// Recieve Accounts from API
  componentDidMount() {
    const axiosConfig = {
			method: 'get',
			url: `${this.props.globalText.api.url}/users`
		}
    axios(axiosConfig)
      .then(response => this.setState({ accounts: response.data }))
      .catch(error => this.setState({ accounts: 'error' }))
  }
  
  addAccount(name, surname, experience) {
		
		let newAccount = accountTemplate
		newAccount.id = makeId()
		newAccount.name = name
		newAccount.surname = surname
		newAccount.experience = experience
		newAccount.dateJoined = moment().format('DD/MM/YYYY')
		
    axios.post(`${this.props.globalText.api.url}/users`, newAccount)
    	.then(response => this.setState({ accounts: this.state.accounts.concat([response.data]) }))
    	.catch(error => this.setState({ accounts: 'error' }))
  }
	
	render() {
    return (
			<div id="account" className="page">
				<div className="account-screen">
					
					<h1>{this.props.globalText.accounts.heading}</h1>
					<p>{this.props.globalText.accounts.subtitle}</p>
					
					{this.state.newAccountScreen ? (
						<CreateAccount globalText={this.props.globalText}
							toggleCreateAccountScreen={this.toggleCreateAccountScreen}
              addAccount={this.addAccount} />
					) : (
						<div className="account-list">
              
              <AccountList appState={this.props.appState}
                globalText={this.props.globalText}
                accounts={this.state.accounts}
                logIn={this.props.logIn} />
							
							{Array.isArray(this.state.accounts) ? (
								<div className="account-list-item"
									onClick={this.toggleCreateAccountScreen}>
									<i className="material-icons">add</i>
									<div className="account-list-item-content">
										<h3>{this.props.globalText.accounts.addNewAccountButton}</h3>
									</div>
								</div>
							) : null}
							
						</div>
					)}
					
				</div>
			</div>
		)
	}
}

export default Accounts