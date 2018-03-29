const changeTitle = newWord => {
	document.title = `${newWord} - Guitar Guides`
	document.getElementById("header-title").innerHTML = newWord
}

export default changeTitle