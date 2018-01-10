import React from 'react'

import './chord-chart.css'

class ChordChart extends React.Component {
	render() {
		
		const fretting = this.props.chord.fretting
		
		return (
			<div className="chart"
				style={this.props.style}>
				
				<div className="chart-heading">{this.props.chord.name}</div>
				
				<div className="chart-open-strings">
					<div style={{ position: 'relative' }}>
					
						<div className="chart-open-string"
							style={{ left: '18px' }}>
							
							{fretting[0] === null ? (
								<i className="material-icons">close</i>
							) : (
								<div className="chart-open-string-play" />
							)}
							
						</div>
						
						<div className="chart-open-string"
							style={{ left: '44px' }}>
							
							{fretting[1] === null ? (
								<i className="material-icons">close</i>
							) : (
								<div className="chart-open-string-play" />
							)}
							
						</div>
						
						<div className="chart-open-string"
							style={{ left: '72px' }}>
							
							{fretting[2] === null ? (
								<i className="material-icons">close</i>
							) : (
								<div className="chart-open-string-play" />
							)}
							
						</div>
						
						<div className="chart-open-string"
							style={{ left: '100px' }}>
							
							{fretting[3] === null ? (
								<i className="material-icons">close</i>
							) : (
								<div className="chart-open-string-play" />
							)}
							
						</div>
						
						<div className="chart-open-string"
							style={{ left: '128px' }}>
							
							{fretting[4] === null ? (
								<i className="material-icons">close</i>
							) : (
								<div className="chart-open-string-play" />
							)}
							
						</div>
						
						<div className="chart-open-string"
							style={{ left: '156px' }}>
							
							{fretting[5] === null ? (
								<i className="material-icons">close</i>
							) : (
								<div className="chart-open-string-play" />
							)}
							
						</div>
						
					</div>
				</div>
				
				<div className="chart-fretboard">
					
					<div className="chart-fret"
						style={{ top: '0' }}></div>
					<div className="chart-fret"
						style={{ top: '45px' }}></div>
					<div className="chart-fret"
						style={{ top: '90px' }}></div>
					<div className="chart-fret"
						style={{ top: '135px' }}></div>
					<div className="chart-fret"
						style={{ top: '180px' }}></div>
					
					<div className="chart-string"
						style={{ left: '0' }}></div>
					<div className="chart-string"
						style={{ left: '28px' }}></div>
					<div className="chart-string"
						style={{ left: '56px' }}></div>
					<div className="chart-string"
						style={{ left: '84px' }}></div>
					<div className="chart-string"
						style={{ left: '112px' }}></div>
					<div className="chart-string"
						style={{ left: '140px' }}></div>
					
					<div className="chart-fix"></div>
					
				</div>
				
			</div>
		)
	}
	
}

export default ChordChart