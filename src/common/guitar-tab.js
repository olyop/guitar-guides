import React from 'react'

import './guitar-tab.css'

class GuitarTab extends React.Component {	
	render() {
		
		const stringSpacing = [0,20,40,60,80,100]
		const leftSpacing = [5,30,55,80,105,130,155,180,205,230,255,280,305]
		
		return (
			<div class="guitar-tab">
				<div className="guitar-tab-inner">
				
					<div className="guitar-tab-horz"
						style={{ top: '10px' }} />
					<div className="guitar-tab-horz"
						style={{ top: '30px' }} />
					<div className="guitar-tab-horz"
						style={{ top: '50px' }} />
					<div className="guitar-tab-horz"
						style={{ top: '70px' }} />
					<div className="guitar-tab-horz"
						style={{ top: '90px' }} />
					<div className="guitar-tab-horz"
						style={{ top: '110px' }} />
					
					{this.props.tab.map((section, index) => {
						if (section === null) {
							return null
						} else {
							return (
								<div className="guitar-tab-note"
									style={{ left: `${leftSpacing[index]}px`, top: `${stringSpacing[section.string - 1]}px`}}>
									<p>{section.fret}</p>
								</div>
							)
						}
					})}
					
				</div>
			</div>
		)
	}	
}

export default GuitarTab