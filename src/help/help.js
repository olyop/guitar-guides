import React from 'react'

import Title from '../common/title'
import Heading from '../common/heading'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'

import './help.css'

class Help extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { content1: true }
    this.toggleContent1 = this.toggleContent1.bind(this)
  }
  
  toggleContent1() { this.setState({ content1: !this.state.content1 }) }
  
  render() {
    
    let rowStyle1 = {
      col1: { width: '20%', fontSize: '13px' },
      col2: { width: '20%', fontSize: '13px' },
      col3: { width: '60%', fontSize: '13px' }
    }, rowStyle2 = {
      col1: { width: '20%', fontSize: '13px' },
      col2: { width: '80%', fontSize: '13px' }
    }
    
    return (
      <div id="help">
        <div className="container">

          <Title>Help</Title>

          <Heading onClick={this.toggleContent1}
            active={this.state.content1}>
            Chord Chart Key
          </Heading>
          
          {this.state.content1 ? (
            <div>
              
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
                    <TableHeaderColumn style={rowStyle1.col1}>Symbol</TableHeaderColumn>
                    <TableHeaderColumn style={rowStyle1.col2}>Name</TableHeaderColumn>
                    <TableHeaderColumn style={rowStyle1.col3}>Description</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  deselectOnClickaway={true}
                  displayRowCheckbox={false}
                  showRowHover={false}
                  stripedRows={false}>
                  <TableRow>
                    <TableRowColumn style={rowStyle1.col1}>
                      <div className="help-chord-chart-key-note"></div>
                    </TableRowColumn>
                    <TableRowColumn style={rowStyle1.col2}>Note</TableRowColumn>
                    <TableRowColumn style={rowStyle1.col3}>The position on the fretboard where you put your finger.</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={rowStyle1.col1}>
                      <div className="help-chord-chart-key-open-note"></div>
                    </TableRowColumn>
                    <TableRowColumn style={rowStyle1.col2}>Open String Note</TableRowColumn>
                    <TableRowColumn style={rowStyle1.col3}>Open string on the guitar.</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={rowStyle1.col1}>
                      <div className="help-chord-chart-key-avoid">  
                        <i className="material-icons">close</i>
                      </div>
                    </TableRowColumn>
                    <TableRowColumn style={rowStyle1.col2}>Avoid</TableRowColumn>
                    <TableRowColumn style={rowStyle1.col3}>Avoid strumming this string or make sure it is muted</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={rowStyle1.col1}>
                      <div className="help-chord-chart-key-fret">(2fret.)</div>
                    </TableRowColumn>
                    <TableRowColumn style={rowStyle1.col2}>Starting Fret</TableRowColumn>
                    <TableRowColumn style={rowStyle1.col3}>The starting fret of the first row on the chart.</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
              
              <Table fixedHeader={true}
                fixedFooter={false}
                selectable={false}
                multiSelectable={false}>
                <TableHeader
                  displaySelectAll={false}
                  adjustForCheckbox={false}
                  enableSelectAll={true}>
                  <TableRow>
                    <TableHeaderColumn style={rowStyle2.col1}>Abbreviation</TableHeaderColumn>
                    <TableHeaderColumn style={rowStyle2.col2}>Full Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody
                  deselectOnClickaway={true}
                  displayRowCheckbox={false}
                  showRowHover={false}
                  stripedRows={false}>
                  <TableRow>
                    <TableRowColumn style={rowStyle2.col1}></TableRowColumn>
                    <TableRowColumn style={rowStyle2.col2}>Major</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={rowStyle2.col1}>m</TableRowColumn>
                    <TableRowColumn style={rowStyle2.col2}>Minor</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={rowStyle2.col1}>7</TableRowColumn>
                    <TableRowColumn style={rowStyle2.col2}>Dominant 7th</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={rowStyle2.col1}>m7</TableRowColumn>
                    <TableRowColumn style={rowStyle2.col2}>Minor 7th</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={rowStyle2.col1}>maj7</TableRowColumn>
                    <TableRowColumn style={rowStyle2.col2}>Major 7th</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={rowStyle2.col1}>sus4</TableRowColumn>
                    <TableRowColumn style={rowStyle2.col2}>Suspended 4th</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
              
            </div>
          ) : null}

        </div>
      </div>
    )
  }
}

export default Help