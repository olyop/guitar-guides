// Import React
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

// Import Pages
import Header from './header/header'
import Menu from './menu/menu'
import Accounts from './accounts/accounts'
import AccountPage from './pages/account-page/account-page'
import Home from './pages/home/home'
import Guitar from './pages/guitar/guitar'
import Bass from './pages/bass/bass'
import Theory from './pages/theory/theory'

// Import Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import Data
import adminAccount from './data/admin-account'
import IMPORT_globalText from './data/global-text'
import IMPORT_chordsData from './data/chords-data'
import IMPORT_theoryData from './data/theory-data'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './header/hamburger/hamburgers.min.css'
import './index.css'

// Root Index Component
class Index extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			account: adminAccount,
//      account: null,
			menu: false
		}
		
		this.logIn = this.logIn.bind(this)
		this.handleHamburger = this.handleHamburger.bind(this)
	}
	
	logIn(account) {
		this.setState({ account })
	}
	
	handleHamburger() {
		this.setState({ menu: !this.state.menu })
	}
	
	render() {
    
		const appState = this.state
		const globalText = this.props.globalText
		
		// Check if account is logged in
		let isAccountLoggedIn
		if (appState.account === null) {
			isAccountLoggedIn = false
		} else if (typeof appState.account === 'object') {
			isAccountLoggedIn = true
		}
		
		return (
			<Router>
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

            {isAccountLoggedIn ? null : (
              <Accounts appState={appState}
								globalText={globalText}
								logIn={this.logIn} />
            )}

            {isAccountLoggedIn ? (
              <div id="content">

                <Route path="/" exact render={ () => (
                  <Home appState={appState}
										globalText={globalText} />		
                )} />
								
								<Route path="/account" exact render={ () => (
                  <AccountPage appState={appState}
										globalText={globalText} />		
                )} />
								
								<Route path="/guitar" render={ ({ match }) => (
                  <Guitar appState={appState}
										match={match}
										globalText={globalText}
										chordsData={this.props.chordsData}
                    theoryData={this.props.theoryData} />		
                )} />
								
								<Route path="/bass" exact render={ () => (
                  <Bass appState={appState}
										globalText={globalText} />		
                )} />
								
								<Route path="/theory" exact render={ () => (
                  <Theory appState={appState}
										globalText={globalText} />		
                )} />

              </div>
            ) : null}

          </div>
        </MuiThemeProvider>
      </Router>
		)
	}
}

ReactDOM.render(
	<Index globalText={IMPORT_globalText}
		chordsData={IMPORT_chordsData}
    theoryData={IMPORT_theoryData} />,
	document.getElementById('root')
)

registerServiceWorker()