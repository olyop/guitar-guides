import React from 'react'

import Toggle from 'material-ui/Toggle'

import './css/guitar-tab.css'

const leftSpacing = [5,30,55,80,105,130,155,180,205,230,255,280,305]
const stringSpacing = [0,20,40,60,80,100]

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
						let style = { left: `${leftSpacing[index]}px` }
						return (
							note.cluster.map((note, i) => {
								let style = {
									container: {
										left: `${leftSpacing[index]}px`,
										top: `${stringSpacing[note.string - 1]}px`
									},
									fret: { display: this.props.hover ? 'none' : 'block' },
									note: { display: this.props.hover ? 'block' : 'none' }
								}
								return (
									<div key={i}
										className="guitar-tab-note"
										style={style.container}>
										<div className="guitar-tab-note-fret"
											style={style.fret}>{note.fret}</div>
										<div className="guitar-tab-note-note"
											style={style.note}>{note.note}</div>
									</div>
								)
							})
						)
					} else {
						let style = {
							container: {
								left: `${leftSpacing[index]}px`,
								top: `${stringSpacing[note.string - 1]}px`
							},
							fret: {
								display: this.props.hover ? 'none' : 'block',
								fontWeight: note.root ? '800' : null,
								color: note.root ? '#F44336' : null
							},
							note: {
								display: this.props.hover ? 'block' : 'none',
								fontWeight: note.root ? '800' : null,
								color: note.root ? '#F44336' : null
							}
						}
						return (
							<div key={index}
								className="guitar-tab-note"
								style={style.container}>
								<div className="guitar-tab-note-fret"
									style={style.fret}>{note.fret}</div>
								<div className="guitar-tab-note-note"
									style={style.note}>{note.note}</div>
							</div>
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
		this.state = { hover: false }
		this.handleHover = this.handleHover.bind(this)
	}
	
	handleHover() {
		this.setState({ hover: !this.state.hover })	}
	
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
			trackSwitched: { backgroundColor: '#ff9d9d' }
		}

		return (
			<div className="guitar-tab">
				
				<div className="guitar-tab-header"
					style={{ width: `${330 * numOfTabSection}px` }}>
					<h1>{this.props.tab.name}</h1>
					<Toggle toggled={this.state.hover}
						onToggle={this.handleHover}
						thumbSwitchedStyle={styles.thumbSwitched}
						trackSwitchedStyle={styles.trackSwitched}
						style={{ width: 'auto' }}
						label="Notes" />
				</div>
				
				<div className="guitar-tabs">
					{tabSections.map((section, index) => (
						<GuitarTabSection key={index}
							index={index}
							hover={this.state.hover}
							tab={this.props.tab} />
					))}
				</div>
				
			</div>
		)
	}
}

export default GuitarTab