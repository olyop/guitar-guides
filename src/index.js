// Import React
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Import Pages
import Header from './header/header'
import Menu from './menu/menu'
import Accounts from './accounts/accounts'
import AccountPage from './pages/account-page/account-page'
import Home from './pages/home/home'

// Import Components
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Import Data
import IMPORT_globalText from './data/global-text'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './dist/hamburgers.min.css'
import './index.css'

class Index extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			account: { id: 1, name: "Oliver Plummer", experience: 2 },
//			account: null,
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
		} else {
			console.log('error: account log in error')
		}
		
		return (
			<Router>
        <MuiThemeProvider>
          <div id="index">

            <Header
              appState={appState}
							globalText={globalText}
							isAccountLoggedIn={isAccountLoggedIn}
              handleHamburger={this.handleHamburger} />

            {appState.menu ? (
              <Menu
              	appState={appState}
								globalText={globalText}
								handleHamburger={this.handleHamburger} />
            ) : null}

            {isAccountLoggedIn ? null : (
              <Accounts
                appState={appState}
								globalText={globalText}
								logIn={this.logIn} />
            )}

            {isAccountLoggedIn ? (
              <div id="content">

                <Route path="/" exact render={ () => (
                  <Home
                		appState={appState}
										globalText={globalText} />		
                )} />
								
								<Route path="/account" exact render={ () => (
                  <AccountPage
                		appState={appState}
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
	<Index
		globalText={IMPORT_globalText} />,
	document.getElementById('root')
)

registerServiceWorker()