import React from 'react'

import includes from 'lodash/includes'
import maliciousSubStrings from '../../database/malicious-sub-strings'

import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Heading from '../../common/heading'

import './account-page.css'

class AccountPage extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			editDialog: false,
			editAccountName: this.props.appState.account.name,
			editAccountSurname: this.props.appState.account.surname,
      editAccountNameError: '',
      editAccountSurnameError: '',
			deleteDialog: false,
			content1: true,
			content2: true,
			content3: true
		}
		this.openDeleteDialog = this.openDeleteDialog.bind(this)
		this.closeDeleteDialog = this.closeDeleteDialog.bind(this)
		this.openEditAccountDialog = this.openEditAccountDialog.bind(this)
		this.closeEditAccountDialog = this.closeEditAccountDialog.bind(this)
		this.handleEditAccountName = this.handleEditAccountName.bind(this)
		this.handleEditAccountSurname = this.handleEditAccountSurname.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
		this.toggleContent1 = this.toggleContent1.bind(this)
		this.toggleContent2 = this.toggleContent2.bind(this)
		this.toggleContent3 = this.toggleContent3.bind(this)
	}
	
	openDeleteDialog() {
		this.setState({ deleteDialog: true }) }
	closeDeleteDialog() {
		this.setState({ deleteDialog: false }) }
	
	openEditAccountDialog() {
		this.setState({ editDialog: true }) }
	closeEditAccountDialog() {
		this.setState({ editDialog: false }) }
	handleEditAccountName(event) {
		this.setState({ editAccountName: event.target.value  })	}
	handleEditAccountSurname(event) {
		this.setState({ editAccountSurname: event.target.value  })	}
  
  handleAdd() {
    // Check for malicious code
		let flag = false
		for (let i = 0; i < maliciousSubStrings.length; i++) {
			if (includes(this.state.editAccountName, maliciousSubStrings[i])) {
				this.setState({ editAccountNameError: 'Please enter a valid name.' })
				flag = true
			}
			if (includes(this.state.editAccountSurname, maliciousSubStrings[i])) {
				this.setState({ editAccountSurnameError: 'Please enter a valid surname.' })
				flag = true
			}
		}
		
		// Exit sending data if potentially malicoius content is found
		if (flag) { return }
		
    // Validate form data
    let isNameEmpty = this.state.editAccountName.trim() === ''
    let isNameTooLong = this.state.editAccountName.length > 10
		let isSurnameEmpty = this.state.editAccountSurname.trim() === ''
    let isSurnameTooLong = this.state.editAccountSurname.length > 10
    
		// Check first name input
    if (isNameEmpty) {
      this.setState({ editAccountNameError: 'Please enter your name.' })
    } else if (isNameTooLong) {
      this.setState({ editAccountNameError: 'Your name is to long.' })
    }
		
		// Check last name input
		if (isSurnameEmpty) {
      this.setState({ editAccountSurnameError: 'Please enter your surname.' })
    } else if (isSurnameTooLong) {
      this.setState({ editAccountSurnameError: 'Your surname is to long.' })
    }
    
    // Send data
    if (isNameEmpty === false &&
			isNameTooLong === false &&
			isSurnameEmpty === false &&
			isSurnameTooLong === false) {
      this.props.editAccount(this.state.editAccountName.trim(), this.state.editAccountSurname.trim())
      this.closeEditAccountDialog()
    }
  }
	
	toggleContent1() {
		this.setState({ content1: !this.state.content1 }) }
	toggleContent2() {
		this.setState({ content2: !this.state.content2 }) }
	toggleContent3() {
		this.setState({ content3: !this.state.content3 }) }
	
	render() {
		return (
			<div id="account-page" className="page">

				<div className="account-page-header">
					<div className="account-page-account">

						<div className="account-page-info">
							<i className="material-icons">account_circle</i>
							<div className="account-page-content">
								<h3>{this.props.appState.account.name}</h3>
								<h4>{this.props.appState.account.surname}</h4>
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
                
                <div className="account-page-overview-info">
                  <h5><b>ID:</b> {this.props.appState.account.id}</h5>
                </div>
								
								<div className="account-page-overview-info">
                  <h5><b>Name:</b> {this.props.appState.account.name}</h5>
                </div>
                
                <div className="account-page-overview-info">
                  <h5><b>Surname:</b> {this.props.appState.account.surname}</h5>
                </div>
                
                <div className="account-page-overview-info">
                  <h5><b>Experience:</b> {this.props.globalText.accounts.expLevels[this.props.appState.account.experience]}</h5>
                </div>
                
                <div className="account-page-overview-info">
                  <h5><b>Date Joined:</b> {this.props.appState.account.dateJoined}</h5>
                </div>
                
							</div>
						) : null}
            
					</div>
					
					<div className="account-page-content">
						<Heading onClick={this.toggleContent2}
							active={this.state.content2}
							subtitle="View your progress in the app.">Progress</Heading>
						{this.state.content2 ? (
							<div className="account-page-content account-page-progress">
								Progress
							</div>
						) : null}
					</div>
					
					<div className="account-page-content">
						<Heading onClick={this.toggleContent3}
							active={this.state.content3}>Settings</Heading>
						{this.state.content3 ? (
							<div className="account-page-content account-page-settings">
								
								<RaisedButton onClick={this.openEditAccountDialog}
									icon={<i className="material-icons" style={{ color: '#fff' }}>edit</i>}
									backgroundColor="#F44336"
									labelColor="#fff"
									style={{ marginRight: '10px', marginBottom: '10px' }}
									label="Edit Account" />
								<Dialog open={this.state.editDialog}
									onRequestClose={this.closeEditDialog}
									title="Edit your account"
									actions={[
										<RaisedButton onClick={this.handleAdd}
                      disabled={this.props.accountEditLoading}
											backgroundColor="#F44336"
											labelColor="#fff"
											icon={<i className="material-icons" style={{ color: '#fff' }}>save</i>}
											label={this.props.accountEditLoading ? 'Editing Account...' : 'Save Changes'} />,
										<FlatButton onClick={this.closeEditAccountDialog}
											style={{ marginLeft: '10px' }}
											icon={<i className="material-icons">close</i>}
											label="Cancel" />
									]}
									actionsContainerStyle={{ padding: '0 24px 24px 24px', textAlign: 'left' }}
									titleStyle={{ paddingBottom: '0' }}>
									<div style={{ display: 'flex', flexDirection: 'column' }}>
										<TextField value={this.state.editAccountName}
											onChange={this.handleEditAccountName}
						          errorText={this.state.editAccountNameError}
                      disabled={this.props.accountEditLoading}
						          floatingLabelText="Name"
											floatingLabelFixed
											tabIndex={1}
											underlineFocusStyle={{ borderColor: '#BDBDBD' }}
											floatingLabelStyle={{ fontWeight: '400', color: '#333', fontSize: '20px' }}
											floatingLabelFocusStyle={{ fontWeight: '700' }}
											errorStyle={{ color: '#F44336' }} />
										<TextField value={this.state.editAccountSurname}
											onChange={this.handleEditAccountSurname}
						          errorText={this.state.editAccountSurnameError}
                      disabled={this.props.accountEditLoading}
						          floatingLabelText="Surname"
											floatingLabelFixed
											tabIndex={2}
											underlineFocusStyle={{ borderColor: '#BDBDBD' }}
											floatingLabelStyle={{ fontWeight: '400', color: '#333', fontSize: '20px' }}
											floatingLabelFocusStyle={{ fontWeight: '700' }}
											errorStyle={{ color: '#F44336' }} />
									</div>
								</Dialog>
								
								<RaisedButton onClick={this.openDeleteDialog}
                  backgroundColor="#F44336"
                  labelColor="#fff"
									icon={<i className="material-icons" style={{ color: '#fff' }}>delete</i>}
									style={{ marginRight: '10px', marginBottom: '10px' }}
                  label="Delete Account" />
								<Dialog open={this.state.deleteDialog}
									onRequestClose={this.closeDeleteDialog}
									title="Are you sure you want to delete your account?"
									children="This is a permenant action."
									actions={[
										<RaisedButton onClick={this.props.deleteAccount}
											disabled={this.props.accountDeleteLoading === 'error' ? true : this.props.accountDeleteLoading}
											backgroundColor="#F44336"
											labelColor="#fff"
											icon={<i className="material-icons" style={{ color: '#fff' }}>done</i>}
											label={this.props.accountDeleteLoading ? 'Deleting Account...' : 'Yes I\'m Sure'} />,
										<FlatButton onClick={this.closeDeleteDialog}
											style={{ marginLeft: '10px' }}
											icon={<i className="material-icons">close</i>}
											label="Cancel" />
									]}
									actionsContainerStyle={{ padding: '0 24px 24px 24px', textAlign: 'left' }}
                  titleStyle={{ paddingBottom: '0' }}>
                </Dialog>
								
								<RaisedButton onClick={this.props.logOut}
									icon={<i className="material-icons" style={{ color: '#fff' }}>exit_to_app</i>}
									backgroundColor="#F44336"
									labelColor="#fff"
									label="Sign Out" />
								
							</div>
						) : null}
					</div>
					
				</div>

			</div>
		)
	}
}

export default AccountPage