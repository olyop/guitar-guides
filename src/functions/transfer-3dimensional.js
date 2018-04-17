const transfer3dimensional = array => {
	let newArray = []
	for (let a = 0; a < array.length; a++) {
		for (let b = 0; b < array[a].length; b++) {
			for (let c = 0; c < array[a][b].length; c++) {
				newArray.push(array[a][b][c])
			}
		}
	}
	return newArray
}

export default transfer3dimensional