// Import React
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Import Components
import Header from './header/header'
import Menu from './menu/menu'
import Account from './account/account'
import Home from './pages/home/home'

import { BrowserRouter as Router, Route } from 'react-router-dom'

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
      loggedIn: false,
			account: null,
			menu: false
		}
		
		this.logIn = this.logIn.bind(this)
		this.handleHamburger = this.handleHamburger.bind(this)
	}
	
	logIn(account) {
		this.setState({
			loggedIn: true,
			account: account
		})
	}
	
	handleHamburger() {
		this.setState({ menu: !this.state.menu })
	}
	
	render() {
		const appState = this.state
		return (
			<Router>
        <MuiThemeProvider>
          <div id="index">

            <Header
              appState={appState}
              handleHamburger={this.handleHamburger} />

            {appState.menu ? (
              <Menu handleHamburger={this.handleHamburger} />
            ) : null}

            {appState.loggedIn ? null : (
              <Account
                appState={appState}
								logIn={this.logIn} />
            )}

            {appState.loggedIn ? (
              <div id="content">

                <Route path="/" exact render={ () => (
                  <Home />		
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
	<Index />,
	document.getElementById('root')
)

registerServiceWorker()