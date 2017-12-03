// Import React
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

// Import Components
import Header from './header/header'
import Menu from './menu/menu'

import { BrowserRouter as Router } from 'react-router-dom'

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
			menu: true
		}
		
		this.handleHamburger = this.handleHamburger.bind(this)
	}
	
	handleHamburger() {
		this.setState({ menu: !this.state.menu })
	}
	
	render() {
		const appState = this.state
		return (
			<Router>
        <div id="index">
				
          <Header
            appState={appState}
            handleHamburger={this.handleHamburger} />

          {appState.menu ? (
            <Menu
              handleHamburger={this.handleHamburger} />
          ) : null}

          <div id="content">

            <div>
              <h1>Content Heading</h1>
              <p>Paragraph</p>
            </div>

          </div>

        </div>
      </Router>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('root')
)

registerServiceWorker()