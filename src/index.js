// Import React
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

// Import Components
import Header from './header/header'

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
			drawer: false
		}
		
		this.handleHamburger = this.handleHamburger.bind(this)
	}
	
	handleHamburger() {
		this.setState({ drawer: !this.state.drawer })
	}
	
	render() {
		const appState = this.state
		return (
			<div id="index">
				
				<Header
					appState={appState}
					handleHamburger={this.handleHamburger} />
				
				<div id="content">
					
				</div>
				
			</div>
		)
	}
}

ReactDOM.render(
	<Index />,
	document.getElementById('root')
)

registerServiceWorker()