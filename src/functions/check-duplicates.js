const checkDuplicates = values => {
	
	let valueArr = values.map(item => item.name)
	
	let isDuplicate = valueArr.some((item, idx) => {
		valueArr.indexOf(item) != idx
	})
	
	console.log(isDuplicate)
}

export default checkDuplicates