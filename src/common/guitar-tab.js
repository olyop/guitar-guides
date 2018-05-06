import React from 'react'

import Toggle from 'material-ui/Toggle'

import './css/guitar-tab.css'

const leftSpacing = [5,30,55,80,105,130,155,180,205,230,255,280,305]
const stringSpacing = [0,20,40,60,80,100]

const TabNote = props => {
	if (props.note.slide) {
		return (
			<div className="guitar-tab-note"
				style={props.containerStyle}>
				<div className="guitar-tab-note-note">&#47;</div>
			</div>
		)
	}
	else {
		return (
			<div className="guitar-tab-note"
				style={props.containerStyle}>
				{props.noteToggle ? (
					<div className="guitar-tab-note-note" style={props.noteStyle}>{props.note.note}</div>
				) : (
					<div className="guitar-tab-note-fret" style={props.fretStyle}>{props.note.fret}</div>
				)}
			</div>
		)
	}
}

class GuitarTabSection extends React.Component {	
	render() {
		return (
			<div className="guitar-tab-section">
				
				{[10,30,50,70,90,110].map((line, index) => (
					<div key={index}
						className="guitar-tab-horz"
						style={{ top: `${line}px` }} />
				))}

				{this.props.tab.tab.slice(0 + (this.props.index * 13), 13 + (this.props.index * 13)).map((note, index) => {
					if (note === null) {
						return null
					} else if (note.same) {
						return (
							note.cluster.map((note, i) => {
								let containerStyle = {
									left: `${leftSpacing[index]}px`,
									top: `${stringSpacing[note.string - 1]}px`
								}
								return (
									<TabNote key={i}
										noteToggle={this.props.noteToggle}
										note={note}
										containerStyle={containerStyle}
									/>
								)
							})
						)
					} else {
						let containerStyle = {
							left: `${leftSpacing[index]}px`,
							top: `${stringSpacing[note.string - 1]}px`
						}, fretStyle = {
							fontWeight: note.root ? '800' : null,
							color: note.root ? '#F44336' : null
						}, noteStyle ={
							fontWeight: note.root ? '800' : null,
							color: note.root ? '#F44336' : null
						}
						return (
							<TabNote key={index}
								noteToggle={this.props.noteToggle}
								note={note}
								containerStyle={containerStyle}
								fretStyle={fretStyle}
								noteStyle={noteStyle}
							/>
						)
					}
				})}
				
			</div>
		)
	}	
}

class GuitarTab extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = { noteToggle: false }
		this.toggleNotes = this.toggleNotes.bind(this)
	}
	
	toggleNotes() {
		this.setState({ noteToggle: !this.state.noteToggle })	}
	
	componentWillReceiveProps() {
		this.setState({ hover: false })	}
	
	render() {
		// Calcuate number of tab sections needed
		let numOfTabSection = Math.ceil(this.props.tab.tab.length / 12)
		let tabSections = new Array(numOfTabSection)
		for (let i = 0; i < numOfTabSection; i++) {
			tabSections[i] = i + 1 
		}
		
		let styles = {
			thumbOff: { backgroundColor: '#BDBDBD' },
			trackOff: { backgroundColor: '#EEEEEE' },
			thumbSwitched: { backgroundColor: 'red' },
			trackSwitched: { backgroundColor: '#ff9d9d' },
			style: { width: 'auto' }
		}

		return (
			<div className="guitar-tab">
				
				<div className="guitar-tab-header">
					<h1>{this.props.tab.name}</h1>
					<Toggle toggled={this.state.noteToggle}
						className="guitar-tab-header-toggle"
						onToggle={this.toggleNotes}
						thumbSwitchedStyle={styles.thumbSwitched}
						trackSwitchedStyle={styles.trackSwitched}
						style={styles.style}
						label="Notes" />
				</div>
				
				<div className="guitar-tabs">
					{tabSections.map((section, index) => (
						<GuitarTabSection key={index}
							index={index}
							noteToggle={this.state.noteToggle}
							tab={this.props.tab} />
					))}
				</div>
				
			</div>
		)
	}
}

export default GuitarTab