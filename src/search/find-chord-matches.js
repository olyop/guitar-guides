import includes from 'lodash/includes'

const findChordMatches = (chordDatabase, query) => {
	// find chords that match the search query
	let matches = []
	for (let i = 0; i < chordDatabase.length; i++) {
		if (includes(chordDatabase[i].name.toLowerCase(), query.toLowerCase())) {
			matches.push(chordDatabase[i])
		}
	}
	
	return matches
}

export default findChordMatches