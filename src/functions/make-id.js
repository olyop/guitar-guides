// Function for generating a new user id
const makeId = (length = 10) => {
	
  let text = ''
	
	// Possible characters in ID
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
	}

  return text
}

export default makeId