import React from 'react'

import axios from 'axios'

import Heading from '../../../common/heading'
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
    axios.get(`${this.props.globalText.api.url}/scales`)
      .then(response => this.setState({ riffs: response.data }))
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

					<Heading onClick={this.toggleContent1}
						active={this.state.content1}
						subtitle={`${this.props.riffsData.length} riffs`}>Famous Rock Riffs</Heading>
					{this.state.content1 ? (
						<div className="riffs">
							{this.props.riffsData.map((riff, index) => (
								<div key={riff.id}
									className="riff">
									{riff.title}
								</div>
							))}
						</div>
					) : null}

				</div>
			)
		}
	}
}

export default GuitarRiffs