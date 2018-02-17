import React from 'react'

import GuitarTab from '../../../common/guitar-tab'

let tabTest = [
	{
		fret: 0,
		string: 1
	},
	{
		fret: 3,
		string: 1
	},
	{
		fret: 0,
		string: 2
	},
	{
		fret: 2,
		string: 2
	},
	{
		
		fret: 0,
		string: 3
	},
	{
		fret: 2,
		string: 3
	},
	{
		fret: 0,
		string: 4
	},
	{
		fret: 2,
		string: 4
	},
	{
		fret: 0,
		string: 5
	},
	{
		fret: 3,
		string: 5
	},
	{
		fret: 0,
		string: 6
	},
	{
		fret: 3,
		string: 6
	}
]

const GuitarScales = props => (
	<div id="guitar-scales">
		<GuitarTab
			tab={tabTest}/>
	</div>
)

export default GuitarScales