import React from 'react'

import { Link } from 'react-router-dom'

import './css/chord-chart.css'

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

const ChordChart = props => {

	const openStringSpacing = [18,44,72,100,128,156]
	const noteSpacingString = [-8,20,48,76,104,132]
	const noteSpacingFret = [14,59,105,149]
	const chartFret = [0,45,90,135,180]
	const chartString = [0,28,56,84,112,140]
	
	// Map data into JSX form
	const mapOpenStrings = props.chord.fretting.map((string, index) => {
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
						<h3>{props.chord.notes[index]}</h3>
					</div>
				</div>
			)
		} else {
			return null
		}
	})
	const mapNotes = props.chord.fretting.map((string, index) => {
		// Check if note is open string
		if (string === null || string === 0) { return null }
		// Determine which fret
		let fretSpacing = noteSpacingFret[string - 1]
		let noteStyle = {
			left: noteSpacingString[index] + 'px',
			top: fretSpacing + 'px'
		}
		return (
			<div key={index}
				className="chart-note"
				style={noteStyle}>
				<h3>{props.chord.notes[index]}</h3>
			</div>
		)
	})
	const mapFrets = chartFret.map((item, i) => {
		let style = { top: item === 0 ? '0' : `${item}px` }
		return (
			<div key={i}
				className="chart-fret"
				style={style} />
		)
	})
	const mapStrings = chartString.map((item, i) => {
		let style = { left: item === 0 ? '0' : `${item}px` }
		return (
			<div key={i}
				className="chart-string"
				style={style} />
		)
	})

	return (
		<div className="chart"
			style={props.style}>

			<div onClick={props.checkFunction ? () => props.checkFunction(props.chord.id) : null}
				className={props.completed ? 'chart-icon chart-icon-completed' : 'chart-icon'}
				style={{ top: '0', left: '0' }}>
				<i className="material-icons"
					style={{ color: props.completed ? '#4CAF50' : '#333' }}>{props.completed ? 'check_circle' : 'check'}</i>
			</div>

			<div className="chart-icon"
				style={{ top: '0', right: '0' }}>
				<Link to="/help">
					<i className="material-icons">help</i>
				</Link>
			</div>

			<ChordChartHeading chord={props.chord} />

			<div className="chart-open-strings">
				<div style={{ position: 'relative' }}>{mapOpenStrings}</div>
			</div>

			<div className="chart-fretboard">

				{mapNotes}
				{mapFrets}
				{mapStrings}

				<div className="chart-fix"></div>

			</div>

		</div>
	)
}

export default ChordChart