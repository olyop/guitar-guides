import React from 'react'

import ChordChart from '../../../common/chord-chart'
import find from 'lodash/find'

const GuitarChords = props => (
	<div id="guitar-chords">
		
		<h1>Standard Chords</h1>
		<p>Here is a list the standard non-bar chords that every guitarist should know.</p>
		<div className="guitar-chords-track">
			
			{props.chordsData.map(chord => (
				<ChordChart key={chord.id}
					chord={chord} />
			))}
			
			
			<ChordChart chord={find(props.chordsData, { id: 'yNJLjcjXVo' })} />
		</div>
		
	</div>
)

export default GuitarChords