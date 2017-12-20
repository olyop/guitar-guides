import React from 'react'

import './account-page.css'

const AccountPage = props => (
	<div id="account-page">
		<h1>{props.appState.account.name}</h1>
	</div>
)

export default AccountPage