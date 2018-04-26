import includes from 'lodash/includes'

const findChordMatches = (database, query) => {
	let matches = []
	for (let i = 0; i < database.length; i++) {
		if (includes(database[i].name.toLowerCase(), query)) {
			matches.push(database[i])
		}
	}
	
	return matches
}

const findPageMatches = (database, query) => {
  let matches = []
  for (let i = 0; i < database.length; i++) {
    if (includes(database[i].name.toLowerCase(), query)) {
      matches.push(database[i])
    }
  }
  return matches
}

const findRiffMatches = (database, query) => {
  let matches = []
  for (let i = 0; i < database.length; i++) {
    if (includes(database[i].title.toLowerCase(), query)) {
      matches.push(database[i])
    }
  }
  return matches
}

export { findChordMatches, findPageMatches, findRiffMatches }