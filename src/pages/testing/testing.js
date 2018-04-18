import React from 'react'

import axios from 'axios'
import transfer3dimensional from '../../functions/transfer-3dimensional'
import checkDuplicates from './testing-functions/check-duplicates'
import validateChords from './testing-functions/validate-chords'
import validateScales from './testing-functions/validate-scales'

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
			results: { validate: null, duplicates: null }
		}
	}
  
	componentDidMount() {
		axios({
			method: 'get',
			url: `${this.props.globalText.api.url}/chordChooser`
		})
		.then(response => {
			const data = transfer3dimensional(response.data)
			this.setState({
				isChordsDatabase: true,
				results: {
					validate: validateChords(data),
					duplicates: checkDuplicates(data.map(item => item.id))
				}
			})
		})
		.catch(error => this.setState({ isChordsDatabase: 'error' }))
	}
  
	render() {
		const props = this.props
		const state = this.state
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
                    <TableHeaderColumn style={props.globalText.testing.colStyle.col1}>Passed</TableHeaderColumn>
                    <TableHeaderColumn style={props.globalText.testing.colStyle.col2}>Test</TableHeaderColumn>
                    <TableHeaderColumn style={props.globalText.testing.colStyle.col3}>Result</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  deselectOnClickaway={true}
                  displayRowCheckbox={false}
                  showRowHover={false}
                  stripedRows={false}>
									<TableRow>
                    <TableRowColumn style={props.globalText.testing.colStyle.col1}>
                      <i className="material-icons"
												style={{ color: state.results.validate.length === 0 ? '#4CAF50' : '#F44336' }}>
												{state.results.validate.length === 0 ? 'done' : 'close'}
											</i>
                    </TableRowColumn>
                    <TableRowColumn style={props.globalText.testing.colStyle.col2}>Validate property values</TableRowColumn>
										<TableRowColumn style={props.globalText.testing.colStyle.col3}>
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
                    <TableRowColumn style={props.globalText.testing.colStyle.col1}>
                      
                      <i className="material-icons"
												style={{ color: state.results.duplicates.length === 0 ? '#4CAF50' : '#F44336' }}>
												{state.results.duplicates.length === 0 ? 'done' : 'close'}
											</i>
                    </TableRowColumn>
                    <TableRowColumn style={props.globalText.testing.colStyle.col2}>Check for duplicate ID values</TableRowColumn>
										<TableRowColumn style={props.globalText.testing.colStyle.col3}>
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

class Test2 extends React.Component {
  
	constructor(props) {
		super(props)
		this.state = {
			isScalesDatabase: false,
			results: { validate: null, duplicates: null }
		}
	}
  
	componentDidMount() {
		axios({
			method: 'get',
			url: `${this.props.globalText.api.url}/scales`
		})
		.then(response => {
			const data = transfer3dimensional(response.data)
			this.setState({
				isScalesDatabase: true,
				results: {
					validate: validateScales(data),
					duplicates: checkDuplicates(data.map(item => item.id))
				}
			})
		})
		.catch(error => {})
	}
  
	render() {
		const props = this.props
		const state = this.state
		return (
			<div className="testing-results">
				{state.isScalesDatabase ? (
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
                    <TableHeaderColumn style={props.globalText.testing.colStyle.col1}>Passed</TableHeaderColumn>
                    <TableHeaderColumn style={props.globalText.testing.colStyle.col2}>Test</TableHeaderColumn>
                    <TableHeaderColumn style={props.globalText.testing.colStyle.col3}>Result</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  deselectOnClickaway={true}
                  displayRowCheckbox={false}
                  showRowHover={false}
                  stripedRows={false}>
									<TableRow>
                    <TableRowColumn style={props.globalText.testing.colStyle.col1}>
                      <i className="material-icons"
												style={{ color: state.results.validate.length === 0 ? '#4CAF50' : '#F44336' }}>
												{state.results.validate.length === 0 ? 'done' : 'close'}
											</i>
                    </TableRowColumn>
                    <TableRowColumn style={props.globalText.testing.colStyle.col2}>Validate property values</TableRowColumn>
										<TableRowColumn style={props.globalText.testing.colStyle.col3}>
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
                    <TableRowColumn style={props.globalText.testing.colStyle.col1}>
                      
                      <i className="material-icons"
												style={{ color: state.results.duplicates.length === 0 ? '#4CAF50' : '#F44336' }}>
												{state.results.duplicates.length === 0 ? 'done' : 'close'}
											</i>
                    </TableRowColumn>
                    <TableRowColumn style={props.globalText.testing.colStyle.col2}>Check for duplicate ID values</TableRowColumn>
										<TableRowColumn style={props.globalText.testing.colStyle.col3}>
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
			test1: false,
			test2: false
		}
		this.toggleTest1 = this.toggleTest1.bind(this)
		this.toggleTest2 = this.toggleTest2.bind(this)
	}
  
	toggleTest1() {
    this.setState({ test1: !this.state.test1 }) }
	toggleTest2() {
    this.setState({ test2: !this.state.test2 }) }
  
	render() {
		return (
			<div>
				
				<div className="testing-test">
					<div>
						<h1>Test and Validate Chords Database</h1>
					</div>
					<RaisedButton label={this.state.test1 ? 'Hide Test Results' : 'Run Tests'}
						onClick={this.toggleTest1} />
					{this.state.test1 ? (
						<Test1 appState={this.props.appState}
            	globalText={this.props.globalText} />
					) : null}
				</div>
				
				<div className="testing-test">
					<div>
						<h1>Test and Validate Scales Database</h1>
					</div>
					<RaisedButton label={this.state.test2 ? 'Hide Test Results' : 'Run Tests'}
						onClick={this.toggleTest2} />
					{this.state.test2 ? (
						<Test2 appState={this.props.appState}
            	globalText={this.props.globalText} />
					) : null}
				</div>
				
			</div>
		)
	}
}

class Testing extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			content1: true,
			content2: true
		}
		this.toggleContent1 = this.toggleContent1.bind(this)
		this.toggleContent2 = this.toggleContent2.bind(this)
	}
	
	toggleContent1() {
    this.setState({ content1: !this.state.content1 }) }
	toggleContent2() {
    this.setState({ content2: !this.state.content2 }) }
	
	render() {
		return (
			<Container id="testing" className="page">
				
				<Title>Testing</Title>
				
				<Heading onClick={this.toggleContent1}
					active={this.state.content1}
					>Database Testing</Heading>
				{this.state.content1 ? (
          <DatabaseTesting appState={this.props.appState}
            globalText={this.props.globalText} />
        ) : null}
				
			</Container>
		)
	}
}

export default Testing