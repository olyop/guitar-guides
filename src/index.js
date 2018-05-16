// Import React
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

// Import Functions
import axios from 'axios'
import pull from 'lodash/pull'
import includes from 'lodash/includes'

 // eslint-disable-next-line
import accountTemplate from './database/account-template'
 // eslint-disable-next-line
import createAdminAccount from './functions/create-admin-account'

// Import Data
import IMPORT_globalText from './database/global-text'
import IMPORT_theoryDatabase from './database/theory-database'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './header/hamburger/hamburgers.min.css'
import './index.css'

// Import Pages
import Header from './header/header'
import Menu from './menu/menu'
import Accounts from './accounts/accounts'
import Footer from './footer/footer'
import Search from './pages/search/search'
import Help from './pages/help/help'
import Testing from './pages/testing/testing'
import Home from './pages/home/home'
import Guitar from './pages/guitar/guitar'
import Bass from './pages/bass/bass'
import Theory from './pages/theory/theory'
import AccountPage from './pages/account-page/account-page'

// Import Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter, Route } from 'react-router-dom'

// Root Index Component
class Index extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			account: createAdminAccount(accountTemplate),
//      account: null,
			accountEditLoading: false,
			accountDeleteLoading: false,
			updateProgressChordsLoading: false,
			menu: false,
			night: false
		}
		this.handleHamburger = this.handleHamburger.bind(this)
		this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
    this.editAccount = this.editAccount.bind(this)
    this.deleteAccount = this.deleteAccount.bind(this)
		this.toggleNightMode = this.toggleNightMode.bind(this)
    this.updateProgressChords = this.updateProgressChords.bind(this)
	}
	
	// Account Functions
	logIn(account) {
    this.setState({ account }) } 
  logOut() {
    this.setState({ account: null }) }
  editAccount(name, surname) {
    this.setState(
      { accountEditLoading: true },
      () => {
        const axiosConfig = {
					method: 'put',
					url: `${this.props.globalText.api.url}/users/${this.state.account.id}`,
					headers: { 'Content-Type': 'application/json' },
          data: this.state.account
				}
        axiosConfig.data.name = name
        axiosConfig.data.surname = surname
				
        axios(axiosConfig)
					.then(response => {
						this.setState({
              account: response.data,
              accountEditLoading: false
            })
          })
					.catch(error => this.setState({ accountEditLoading: 'error' }))
      }
    )
  }
	deleteAccount() {
		this.setState(
			{ accountDeleteLoading: true },
			() => {
				const axiosConfig = {
					method: 'delete',
					url: `${this.props.globalText.api.url}/users/${this.state.account.id}`,
					headers: { 'Content-Type': 'application/json' }
				}
				axios(axiosConfig)
					.then(response => {
						this.setState({ accountDeleteLoading: false })
						this.logOut()
					})
					.catch(error => this.setState({ accountDeleteLoading: 'error' }))
			}
		)
  }
	
	toggleNightMode() {
		this.setState({ night: !this.state.night })	}
  
	// Handle Navigation Menu
	handleHamburger() {
    this.setState({ menu: !this.state.menu }) }
  
  // Progress Functions
  updateProgressChords(chordId) {
		this.setState(
			{ updateProgressChordsLoading: true },
			() => {
				const config = {
					method: 'put',
					url: `${this.props.globalText.api.url}/users/${this.state.account.id}`,
					headers: { 'Content-Type': 'application/json' },
					data: this.state.account
				}

				// Determine whether to add or remove the chord
				if (includes(config.data.progress.guitar.chords, chordId)) {
					config.data.progress.guitar.chords = pull(config.data.progress.guitar.chords, chordId) }
				else {
					config.data.progress.guitar.chords.push(chordId) }

				axios(config)
					.then(response => {
						this.setState({
							account: response.data,
							updateProgressChordsLoading: false
						})
					})
					.catch(error => this.setState({ updateProgressChordsLoading: 'error' }))
			}
		)
  }
	
	render() {
		const appState = this.state
		const globalText = this.props.globalText
		
		// Check if account is logged in
		let isAccountLoggedIn
		if (appState.account === null) {
			isAccountLoggedIn = false }
		else if (typeof appState.account === 'object') {
			isAccountLoggedIn = true }
		
		return (
			<BrowserRouter>
        <MuiThemeProvider>
          <div id="index">

            <Header appState={appState}
							globalText={globalText}
							isAccountLoggedIn={isAccountLoggedIn}
              handleHamburger={this.handleHamburger} />

            {appState.menu ? (
              <Menu appState={appState}
								globalText={globalText}
								handleHamburger={this.handleHamburger} />
            ) : null}

            {isAccountLoggedIn ? (
              <div id="content">
							
								<Route path="/" exact render={ ({ match, location }) => (
									<Home location={location} />
								)} />
								
								<Route path="/account" exact render={ () => (
									<AccountPage appState={appState}
										globalText={globalText}
										logOut={this.logOut}
                    editAccount={this.editAccount}
										accountEditLoading={this.state.accountEditLoading}
										deleteAccount={this.deleteAccount}
										accountDeleteLoading={this.state.accountDeleteLoading} />
								)} />
								
								<Route path="/testing" exact render={ () => (
									<Testing appState={appState}
										globalText={globalText} />
								)} />
                
                <Route path="/help" exact render={ () => (
                  <Help appState={appState}
                    globalText={globalText} />
                )} />
                
                <Route path="/search" exact render={ () => (
                  <Search appState={appState}
                    globalText={globalText}
									  updateProgressChords={this.updateProgressChords}
										updateProgressChordsLoading={this.state.updateProgressChordsLoading} />
                )} />
								
								<Route path="/guitar" render={ ({ match }) => (
                  <Guitar match={match}
										appState={appState}
										globalText={globalText}
                    theoryData={this.props.theoryData}
                    updateProgressChords={this.updateProgressChords}
										updateProgressChordsLoading={this.state.updateProgressChordsLoading}
                  />		
                )} />
								
								<Route path="/bass" exact render={ () => (
                  <Bass appState={appState}
										globalText={globalText} />		
                )} />
								
								<Route path="/theory" exact render={ () => (
                  <Theory appState={appState}
										globalText={globalText} />		
                )} />
								
                <Footer />
							
							</div>
            ) : (
							<Accounts appState={appState}
								globalText={globalText}
								logIn={this.logIn}
								toggleNightMode={this.toggleNightMode} />
						)}

          </div>
        </MuiThemeProvider>
      </BrowserRouter>
		)
	}
}

ReactDOM.render(
	<Index globalText={IMPORT_globalText}
    theoryData={IMPORT_theoryDatabase} />,
	document.getElementById('root')
)

registerServiceWorker()