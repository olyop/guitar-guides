import React from 'react'

import axios from 'axios'

import Loading from '../../../common/loading'
import ScaleChooser from '../../../common/scale-chooser'
import Heading from '../../../common/heading'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

const GuitarScalesKey = props => {
	let rowStyle = {
		col1: { width: '20%', fontSize: '13px' },
		col2: { width: '20%', fontSize: '13px' },
		col3: { width: '60%', fontSize: '13px' }
	}
	return (
		<Table bodyStyle={{ marginBottom: '30px' }}
			fixedHeader={true}
			fixedFooter={false}
			selectable={false}
			multiSelectable={false}>
			<TableHeader
				displaySelectAll={false}
				adjustForCheckbox={false}
				enableSelectAll={true}>
				<TableRow>
					<TableHeaderColumn style={rowStyle.col1}>Scale</TableHeaderColumn>
					<TableHeaderColumn style={rowStyle.col2}>Equivalent Major</TableHeaderColumn>
					<TableHeaderColumn style={rowStyle.col3}>Equivalent Minor</TableHeaderColumn>
				</TableRow>
			</TableHeader>
			<TableBody
				deselectOnClickaway={true}
				displayRowCheckbox={false}
				showRowHover={false}
				stripedRows={false}>
				<TableRow>
					<TableRowColumn style={rowStyle.col1}>E Ionian</TableRowColumn>
					<TableRowColumn style={rowStyle.col2}>E Major</TableRowColumn>
					<TableRowColumn style={rowStyle.col3}>C# Minor</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn style={rowStyle.col1}>E Dorian</TableRowColumn>
					<TableRowColumn style={rowStyle.col2}>D Major</TableRowColumn>
					<TableRowColumn style={rowStyle.col3}>B Minor</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn style={rowStyle.col1}>E Phrygian</TableRowColumn>
					<TableRowColumn style={rowStyle.col2}>C Major</TableRowColumn>
					<TableRowColumn style={rowStyle.col3}>A Minor</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn style={rowStyle.col1}>E Lydian</TableRowColumn>
					<TableRowColumn style={rowStyle.col2}>B Major</TableRowColumn>
					<TableRowColumn style={rowStyle.col3}>G# Minor</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn style={rowStyle.col1}>E Mixolydian</TableRowColumn>
					<TableRowColumn style={rowStyle.col2}>A Major</TableRowColumn>
					<TableRowColumn style={rowStyle.col3}>F#m Minor</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn style={rowStyle.col1}>E Aeolian</TableRowColumn>
					<TableRowColumn style={rowStyle.col2}>G Major</TableRowColumn>
					<TableRowColumn style={rowStyle.col3}>E Minor</TableRowColumn>
				</TableRow>
				<TableRow>
					<TableRowColumn style={rowStyle.col1}>E Locrian</TableRowColumn>
					<TableRowColumn style={rowStyle.col2}>F Major</TableRowColumn>
					<TableRowColumn style={rowStyle.col3}>D Minor</TableRowColumn>
				</TableRow>
			</TableBody>
		</Table>
	)
}

class GuitarScales extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			scales: null,
			content1: true,
			content2: true
		}
		this.toggleContent1 = this.toggleContent1.bind(this)
		this.toggleContent2 = this.toggleContent2.bind(this)
	}
	
	componentDidMount() {
    axios.get(`${this.props.globalText.api.url}/scales`)
      .then(response => this.setState({ scales: response.data }))
      .catch(error => this.setState({ scales: 'error' }))
	}
	
	toggleContent1() {
		this.setState({ content1: !this.state.content1 }) }
	toggleContent2() {
		this.setState({ content2: !this.state.content2 }) }
	
	render() {
		if (this.state.scales === null) {
			return <div className="guitar-chords-track"><Loading /></div>
		} else if (this.state.scales === 'error') {
			return <div className="guitar-chords-track">Error</div>
		} else if (this.state.scales.constructor === Array) {
			return (
				<div id="guitar-scales">

					<Heading onClick={this.toggleContent1}
						active={this.state.content1}>Scale Chooser</Heading>
					{this.state.content1 ? (
						<div>
							<p>Choose what scale you want to learn.</p>
							<ScaleChooser scalesData={this.state.scales}
								theoryData={this.props.theoryData} />
						</div>
					) : null}
					
					<Heading onClick={this.toggleContent2}
						active={this.state.content2}>Scale Key</Heading>
					{this.state.content2 ? (
						<GuitarScalesKey />
					) : null}

				</div>
			)
		}
	}
}

export default GuitarScales