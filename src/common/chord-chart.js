import React from 'react'

import { Link } from 'react-router-dom'

import './chord-chart.css'

const ChordChartHeading = props => {
  if (props.chord.fret === 1) {
    return <div className="chart-heading"><h2>{props.chord.name}</h2></div>
  } else {
    return (
      <div className="chart-heading">
        <h2>
          {props.chord.name}
          <span>{' (' + String(props.chord.fret) + 'fr.)'}</span>
        </h2>
      </div>
    )
  }
}

class ChordChart extends React.Component {
	render() {
    
    const chord = this.props.chord
    
		const openStringSpacing = [18,44,72,100,128,156]
		const noteSpacingString = [-8,20,48,76,104,132]
		const noteSpacingFret = [14,59,105,149]
		
		return (
			<div className="chart"
				style={this.props.style}>
				
				<div onClick={this.props.checkFunction ? () => this.props.checkFunction(chord.id) : null}
          className="chart-icon"
					style={{ top: '0', left: '0' }}>
					<i className="material-icons"
            style={{ color: this.props.completed ? '#4285f4' : '#333' }}>{this.props.completed ? 'check_circle' : 'check'}</i>
				</div>
				
				<div className="chart-icon"
					style={{ top: '0', right: '0' }}>
					<Link to="/help">
            <i className="material-icons">help</i>
          </Link>
				</div>
				
				<ChordChartHeading chord={chord} />
				
				<div className="chart-open-strings">
					<div style={{ position: 'relative' }}>
						
						{chord.fretting.map((string, index) => {
							if (string === null) {
								return (
									<div key={index}
										className="chart-open-string"
										style={{ left: `${openStringSpacing[index]}px` }}>
										<i className="material-icons">close</i>
									</div>
								)
							} else if (string === 0) {
								return (
									<div key={index}
										className="chart-open-string"
										style={{ left: `${openStringSpacing[index]}px` }}>
                    <div className="chart-open-string-play">
                      <h3>{chord.notes[index]}</h3>
                    </div>
									</div>
								)
							} else {
								return null
							}
						})}
						
					</div>
				</div>
				
				<div className="chart-fretboard">
					
					{chord.fretting.map((string, index) => {
						
						// Determine which fret
						let fretSpacing
						if (string === 1) {
							fretSpacing = noteSpacingFret[0]
						} else if (string === 2) {
							fretSpacing = noteSpacingFret[1]
						} else if (string === 3) {
							fretSpacing = noteSpacingFret[2]
						} else if (string === 4) {
							fretSpacing = noteSpacingFret[3]
						} else {
              return null
            }
							
						return (
							<div key={index} className="chart-note"
								style={{ left: `${noteSpacingString[index]}px`, top: `${fretSpacing}px` }}>
                <h3>{chord.notes[index]}</h3>
              </div>
						)
					})}
					
					<div className="chart-fret" style={{ top: '0' }}></div>
					<div className="chart-fret" style={{ top: '45px' }}></div>
					<div className="chart-fret" style={{ top: '90px' }}></div>
					<div className="chart-fret" style={{ top: '135px' }}></div>
					<div className="chart-fret" style={{ top: '180px' }}></div>
					
					<div className="chart-string" style={{ left: '0' }}></div>
					<div className="chart-string" style={{ left: '28px' }}></div>
					<div className="chart-string" style={{ left: '56px' }}></div>
					<div className="chart-string" style={{ left: '84px' }}></div>
					<div className="chart-string" style={{ left: '112px' }}></div>
					<div className="chart-string" style={{ left: '140px' }}></div>
					
					<div className="chart-fix"></div>
					
				</div>
				
			</div>
		)
	}
	
}

export default ChordChart