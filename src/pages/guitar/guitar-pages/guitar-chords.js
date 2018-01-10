import React from 'react'

import ChordChart from '../../../common/chord-chart'

const GuitarChords = props => (
	<div id="guitar-chords">
		
		<ChordChart chord={props.chordsData[0]} />
		
	</div>
)

export default GuitarChords