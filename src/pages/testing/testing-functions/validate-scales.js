import validateString from '../../../functions/validate-string'

const validateScales = array => {
	
	let recordsToCheck = []
	
	for (let i = 0; i < array.length; i++) {
		
		// Check ID
		if (typeof array[i].id !== 'string') {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'ID property data type is invalid'
			})
		}
		if (array[i].id.length !== 10) {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'ID property has an invalid length'
			})
		}
		if (validateString(array[i].id) === false) {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'ID property contains a invalid character or substring'
			})
		}
		
		// Check Name
		if (typeof array[i].name !== 'string') {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'Name property data type is invalid'
			})
		}
		if (validateString(array[i].name) === false) {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'Name property contains a invalid character or substring'
			})
		}
		
		// Check Fret
		if (typeof array[i].fret !== 'number') {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'Fret property data type is invalid'
			})
		}
		
		// Check Tab
		if (array[i].tab.constructor !== Array) {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'Tab property data type is invalid'
			})
		}
	}
	
	return recordsToCheck
}

export default validateScales