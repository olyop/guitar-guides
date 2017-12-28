import React from 'react'

import LinearProgress from 'material-ui/LinearProgress'

import './account-page.css'

const AccountPage = props => (
	<div id="account-page">
		
		<div className="account-page-header">
			
			<div className="account-page-account">
				
				<div className="account-page-info">
					<i className="material-icons">account_circle</i>
					<div className="account-page-content">
						<h3>{`${props.appState.account.name} ${props.appState.account.surname}`}</h3>
						<h4>
							<b>Experience: </b>
							{props.globalText.accounts.expLevels[props.appState.account.experience]}
							<br />
							<b>Date Joined: </b>
							{props.appState.account.dateJoined}
						</h4>
					</div>
				</div>
				
				<div className="account-page-percent">
					<p>50%</p>
					<h3>Completed</h3>
				</div>
				
			</div>
			
			<div className="account-page-progress">
				<LinearProgress mode="determinate"
					color="#F44336"
					style={{ borderRadius: '5px', height: '20px', backgroundColor: '#E0E0E0' }}
					value={'50'} />
			</div>
			
		</div>
		
		<div className="container account-page-body">
			<div className="row">
			
				Test
			
			</div>
		</div>
		
	</div>
)

export default AccountPage