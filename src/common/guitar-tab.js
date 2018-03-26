import React from 'react'

import './css/guitar-tab.css'

class GuitarTabSection extends React.Component {	
	render() {
		
		const stringSpacing = [0,20,40,60,80,100]
		const leftSpacing = [5,30,55,80,105,130,155,180,205,230,255,280,305]
		
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
								<p>{section.fret}</p>
							</div>
						)
					}
				})}
				
			</div>
		)
	}	
}

class GuitarTab extends React.Component {
	render() {
		
		// Calcuate number of tab sections needed
		let numOfTabSection = Math.ceil((this.props.scale.tab.length + 1) / 12)
		let tabSections = new Array(numOfTabSection)
		for (let i = 0; i < numOfTabSection; i++) {
			tabSections[i] = i + 1 
		}

		return (
			<div className="guitar-tab">
				
				<h1>{this.props.scale.name}</h1>
				
				<div className="guitar-tabs">
					{tabSections.map((section, index) => (
						<GuitarTabSection key={index}
							tab={this.props.scale.tab.slice(0 + (index * 13), 13 + (index * 13))} />
					))}
				</div>
				
			</div>
		)
	}
}

export default GuitarTab