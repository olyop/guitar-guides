import makeId from './make-id'

const createAdminAccount = template => {
	
	template.id = makeId()
	template.name = 'Admin'
	template.surname = 'Account'
	template.experience = 2
	template.dateJoined = '1/1/2018'
	
	return template
}

export default createAdminAccount