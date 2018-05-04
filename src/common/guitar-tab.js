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

				{this.props.tab.map((section, index) => {
					if (section === null) {
						return null
					} else {
						let noteStyle = {
							left: `${leftSpacing[index]}px`,
							top: `${stringSpacing[section.string - 1]}px`
						}
						return (
							<div key={index}
								className="guitar-tab-note"
								style={noteStyle}>
								<div className="guitar-tab-note-fret"
									style={{ display: this.props.hover ? 'none' : 'block' }}>{section.fret}</div>
								<div className="guitar-tab-note-note"
									style={{ display: this.props.hover ? 'block' : 'none' }}>{section.note}</div>
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
		let numOfTabSection = Math.ceil(this.props.scale.tab.length / 12)
		let tabSections = new Array(numOfTabSection)
		for (let i = 0; i < numOfTabSection; i++) {
			tabSections[i] = i + 1 
		}
		
		const styles = {
			thumbOff: { backgroundColor: '#ffcccc' },
			trackOff: { backgroundColor: '#ff9d9d' },
			thumbSwitched: { backgroundColor: 'red' },
			trackSwitched: { backgroundColor: '#ff9d9d' }
		}

		return (
			<div className="guitar-tab">
				
				<div className="guitar-tab-header"
					style={{ width: `${330 * numOfTabSection}px` }}>
					<h1>{this.props.scale.name}</h1>
					<Toggle toggled={this.state.hover}
						onToggle={this.handleHover}
						thumbStyle={styles.thumbOff}
						trackStyle={styles.trackOff}
						thumbSwitchedStyle={styles.thumbSwitched}
						trackSwitchedStyle={styles.trackSwitched}
						style={{ width: 'auto' }}
						label="Notes" />
				</div>
				
				<div className="guitar-tabs">
					{tabSections.map((section, index) => (
						<GuitarTabSection key={index}
							hover={this.state.hover}
							tab={this.props.scale.tab.slice(0 + (index * 13), 13 + (index * 13))} />
					))}
				</div>
				
			</div>
		)
	}
}

export default GuitarTab