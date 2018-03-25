const checkDuplicates = array => {
	
	let cache = {}
	let results = []
	
	for (let i = 0; i < array.length; i++) {
		if (cache[array[i]] === true) {
			results.push(array[i])
		 } else {
			 cache[array[i]] = true
		 }
	}
	
	return results
}

export default checkDuplicates