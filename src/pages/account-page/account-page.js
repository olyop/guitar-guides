import React from 'react'

import Heading from '../../common/heading'
import RaisedButton from 'material-ui/RaisedButton'

import './account-page.css'

class AccountPage extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			content1: false,
			content2: false,
			content3: false
		}
		
		this.toggleContent1 = this.toggleContent1.bind(this)
		this.toggleContent2 = this.toggleContent2.bind(this)
		this.toggleContent3 = this.toggleContent3.bind(this)
	}
	
	toggleContent1() { this.setState({ content1: !this.state.content1 }) }
	toggleContent2() { this.setState({ content2: !this.state.content2 }) }
	toggleContent3() { this.setState({ content3: !this.state.content3 }) }
	
	render() {
		return (
			<div id="account-page">

				<div className="account-page-header">
					<div className="account-page-account">

						<div className="account-page-info">
							<i className="material-icons">account_circle</i>
							<div className="account-page-content">
								<h3>{`${this.props.appState.account.name} ${this.props.appState.account.surname}`}</h3>
								<h4>
									<b>Experience: </b>
									{this.props.globalText.accounts.expLevels[this.props.appState.account.experience]}
									<br />
									<b>Date Joined: </b>
									{this.props.appState.account.dateJoined}
								</h4>
							</div>
						</div>

						<div className="account-page-percent">
							<p>50%</p>
							<h3>Completed</h3>
						</div>

					</div>
				</div>

				<div className="container account-page-section">
					
					<div className="account-page-content">
						<Heading onClick={this.toggleContent1}
							active={this.state.content1}>Overview</Heading>
						{this.state.content1 ? (
							<div className="account-page-content account-page-overview">
								Overview
							</div>
						) : null}
					</div>
					
					<div className="account-page-content">
						<Heading onClick={this.toggleContent2}
							active={this.state.content2}>Progress</Heading>
						{this.state.content2 ? (
							<div className="account-page-content account-page-progress">
								Progress
							</div>
						) : null}
					</div>
					
					<div className="account-page-content">
						<Heading onClick={this.toggleContent3}
							active={this.state.content3}>Setttings</Heading>
						{this.state.content3 ? (
							<div className="account-page-content account-page-settings">
								Settings
							</div>
						) : null}
					</div>
					
				</div>

				<div className="account-page-sign-out">
					<RaisedButton onClick={this.props.logOut}
						backgroundColor={'#F44336'}
						labelColor={'#fff'}
						label="Sign Out" />
				</div>

			</div>
		)
	}
}

export default AccountPage