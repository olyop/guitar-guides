import React from 'react'

import axios from 'axios'
import transferChordsIntoArray from '../../functions/transfer-chords-into-array'
import checkDuplicates from './testing-functions/check-duplicates'
import validateChords from './testing-functions/validate-chords'

import './testing.css'

import Title from '../../common/title'
import Container from '../../common/container'
import Heading from '../../common/heading'
import Loading from '../../common/loading'
import RaisedButton from 'material-ui/RaisedButton'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

class Test1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isChordsDatabase: false,
			results: {
				validate: null,
				duplicates: null
			}
		}
	}
	componentDidMount() {
		axios({
			method: 'get',
			url: 'http://localhost:3001/chordChooser'
		})
		.then(response => {
			const data = transferChordsIntoArray(response.data)
			this.setState({
				isChordsDatabase: true,
				results: {
					validate: validateChords(data),
					duplicates: checkDuplicates(data.map(item => item.id))
				}
			})
		})
		.catch(error => {
			this.setState({ chordsDatabase: 'error' })
		})
	}
	render() {
		const state = this.state
		let columnStyle1 = {
      col1: { width: '15%', padding: '10px' },
      col2: { width: '30%', padding: '10px' },
      col3: { width: '55%', padding: '10px' }
    }
		return (
			<div className="testing-results">
				{state.isChordsDatabase ? (
					<div>
						<h2>Test Results:</h2>
						<div className="testing-results-log">
							<Table
                fixedHeader={true}
                fixedFooter={false}
                selectable={false}
                multiSelectable={false}>
                <TableHeader
                  displaySelectAll={false}
                  adjustForCheckbox={false}
                  enableSelectAll={true}>
                  <TableRow>
                    <TableHeaderColumn style={columnStyle1.col1}>Passed</TableHeaderColumn>
                    <TableHeaderColumn style={columnStyle1.col2}>Test</TableHeaderColumn>
                    <TableHeaderColumn style={columnStyle1.col3}>Result</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  deselectOnClickaway={true}
                  displayRowCheckbox={false}
                  showRowHover={false}
                  stripedRows={false}>
									<TableRow>
                    <TableRowColumn style={columnStyle1.col1}>
                      <i className="material-icons"
												style={{ color: state.results.validate.length === 0 ? '#4CAF50' : '#F44336' }}>
												{state.results.validate.length === 0 ? 'done' : 'close'}
											</i>
                    </TableRowColumn>
                    <TableRowColumn style={columnStyle1.col2}>Validate property values</TableRowColumn>
										<TableRowColumn style={columnStyle1.col3}>
											{state.results.validate.length === 0 ? (
												<p>All database items and their property values are valid</p>
											) : (
												<div>
													{state.results.validate.map(item => <p key={item.id}><b>'{item.id}'</b> - {item.problem}</p>)}
												</div>
											)}
										</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={columnStyle1.col1}>
                      
                      <i className="material-icons"
												style={{ color: state.results.duplicates.length === 0 ? '#4CAF50' : '#F44336' }}>
												{state.results.duplicates.length === 0 ? 'done' : 'close'}
											</i>
                    </TableRowColumn>
                    <TableRowColumn style={columnStyle1.col2}>Check for duplicate ID values</TableRowColumn>
										<TableRowColumn style={columnStyle1.col3}>
											{state.results.duplicates.length === 0 ? (
												<p>No Duplicates Found</p>
											) : (
												<div>
													<p><b>Duplicates found:</b></p>
													{state.results.duplicates.map(item => <p key={item}>{item}</p>)}
												</div>
											)}
										</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
						</div>
					</div>
				) : <Loading />}
			</div>
		)
	}
}

class DatabaseTesting extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			showTests: {
				test1: false
			}
		}
		this.toggleTest1 = this.toggleTest1.bind(this)
	}
	toggleTest1() { this.setState({ showTests: { test1: !this.state.showTests.test1 } }) }
	render() {
		return (
			<div>
				<div className="testing-test">
					<div>
						<h1>Test/Validate Chords Database</h1>
					</div>
					<RaisedButton label={this.state.showTests.test1 ? 'Hide Test Results' : 'Run Tests'}
						onClick={this.toggleTest1} />
					{this.state.showTests.test1 ? (
						<Test1 />
					) : null}
				</div>
			</div>
		)
	}
}

class Testing extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = { content1: true }
		this.toggleContent1 = this.toggleContent1.bind(this)
	}
	
	toggleContent1() { this.setState({ content1: !this.state.content1 }) }
	
	render() {
		return (
			<Container id="testing">
				
				<Title>Testing</Title>
				<Heading onClick={this.toggleContent1}
					active={this.state.content1}
					>Database Testing</Heading>
				{this.state.content1 ? <DatabaseTesting /> : null}
				
			</Container>
		)
	}
}

export default Testing