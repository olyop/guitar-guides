import includes from 'lodash/includes'
import maliciousSubStrings from '../database/malicious-sub-strings'

const validateString = string => {
	let isStringValid = true
	for (let a = 0; a < string.length; a++) {
		for (let b = 0; b < maliciousSubStrings.length; b++) {
			if (includes(maliciousSubStrings[b], string.charAt(a))) {
				isStringValid = false
			}
		}
	}
	return isStringValid
}

export default validateString