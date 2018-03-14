const transferChordsIntoArray = database => {
	let chordsArray = []
	for (let a = 0; a < database.length; a++) {
		for (let b = 0; b < database[a].length; b++) {
			for (let c = 0; c < database[a][b].length; c++) {
				chordsArray.push(database[a][b][c])
			}
		}
	}
	return chordsArray
}

export default transferChordsIntoArray