import moment from 'moment'
import makeId from './make-id'

// Function for creating a admin account
const createAdminAccount = template => {
	
	template.id = makeId()
	template.name = 'Admin'
	template.surname = 'Account'
	template.experience = 2
	template.dateJoined = moment().format('DD/MM/YYYY')
	
	return template
}

export default createAdminAccount