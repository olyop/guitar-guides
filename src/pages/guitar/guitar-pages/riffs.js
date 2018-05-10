import React from 'react'

import axios from 'axios'
import orderBy from 'lodash/orderBy'

import Riff from '../../../common/riff'
import { Heading1 } from '../../../common/heading'
import Loading from '../../../common/loading'

import './riffs.css'

class GuitarRiffs extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			riffs: null,
			content1: true
		}
		this.toggleContent1 = this.toggleContent1.bind(this)
	}
	
	componentDidMount() {
    axios.get(`${this.props.globalText.api.url}/riffs`)
      .then(response => this.setState({ riffs: orderBy(response.data, ['title'],['asc']) }))
      .catch(error => this.setState({ riffs: 'error' }))
	}
	
	toggleContent1() {
		this.setState({ content1: !this.state.content1 }) }
	
	render() {
		if (this.state.riffs === null) {
			return <div id="guitar-riffs"><Loading /></div>
		} else if (this.state.riffs === 'error') {
			return <div id="guitar-riffs">Error</div>
		} else if (this.state.riffs.constructor === Array) {
			return (
				<div id="guitar-riffs">

					<Heading1 onClick={this.toggleContent1}
						active={this.state.content1}
						subtitle={`${this.state.riffs.length + 1} famous rock riffs`}>Riffs</Heading1>
					{this.state.content1 ? (
						<div className="riffs">
							{this.state.riffs.map((riff, index) => <Riff key={riff.id} globalText={this.props.globalText} riff={riff} />)}
						</div>
					) : null}

				</div>
			)
		}
	}
}

export default GuitarRiffs