const checkDuplicates = values => {
	
	let arr = values.map(item => item.id)
	let cache = {}
	let results = []
	
	for (let i = 0; i < arr.length; i++) {
		if (cache[arr[i]] === true) {
			results.push(arr[i])
		 } else {
			 cache[arr[i]] = true
		 }
	}
	
	return results
}

export default checkDuplicates