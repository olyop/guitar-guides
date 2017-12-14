import React from 'react'

//import TextField from 'material-ui/TextField'
import defaultAccountPhoto from './defaultAccountPhoto.png'

import './account.css'

const Account = props => (
  <div id="account">
    
    <div className="account-screen">
      <h1>Accounts</h1>
      <p>Please login to an account to continue in the app.</p>
      <div className="account-list">
        <div className="account-list-item">
          <img src={defaultAccountPhoto} alt="Profile" />
          <div className="account-list-item-content">
            <h2>Barack Obama</h2>
            <p>50% Completed</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
)

export default Account