import includes from 'lodash/includes'
import maliciousSubStrings from '../../../database/malicious-sub-strings'

maliciousSubStrings.splice(0,3)

const validateString = str => {
	let isStringValid = true
	for (let a = 0; a < str.length; a++) {
		for (let b = 0; b < maliciousSubStrings.length; b++) {
			if (includes(maliciousSubStrings[b], str.charAt(a))) {
				isStringValid = false
			}
		}
	}
	return isStringValid
}

const validateChords = array => {
	
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
		
		// Check Fretting
		if (array[i].fretting.constructor !== Array) {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'Fretting property data type is invalid'
			})
		}
		if (array[i].fretting.length !== 6) {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'Fretting property array is of invalid length'
			})
		}
		for (let a = 0; a < array[i].fretting.length; a++) {
			if (typeof array[i].fretting[a] === 'number' || array[i].fretting[a] === null) {
				
			} else {
				recordsToCheck.push({
					id: array[i].id,
					problem: 'Array items in fretting property array has an invalid data type'
				})
			}
		}
		
		// Check Notes
		if (array[i].notes.constructor !== Array) {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'Notes property data type is invalid'
			})
		}
		if (array[i].notes.length !== 6) {
			recordsToCheck.push({
				id: array[i].id,
				problem: 'Notes property array is of invalid length'
			})
		}
		for (let b = 0; b < array[i].notes.length; b++) {
			if (typeof array[i].notes[b] === 'string' || array[i].notes[b] === null) {
				
			} else {
				recordsToCheck.push({
					id: array[i].id,
					problem: 'Array item in notes property array has an invalid data type'
				})
			}
			if (typeof array[i].notes[b] === 'string') {
				if (validateString(array[i].notes[b]) === false) {
					recordsToCheck.push({
						id: array[i].id,
						problem: 'Array item in notes property contains a invalid character or substring'
					})
				}
			}
		}
	}
	
	return recordsToCheck
}

export default validateChords