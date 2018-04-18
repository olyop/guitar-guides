import React from 'react'

import axios from 'axios'

import Loading from '../../../common/loading'
import ScaleChooser from '../../../common/scale-chooser'
import Heading from '../../../common/heading'

class GuitarScales extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			scales: null,
			content1: true
		}
		this.toggleContent1 = this.toggleContent1.bind(this)
	}
	
	componentDidMount() {
    axios.get(`${this.props.globalText.api.url}/scales`)
      .then(response => this.setState({ scales: response.data }))
      .catch(error => this.setState({ scales: 'error' }))
	}
	
	toggleContent1() {
		this.setState({ content1: !this.state.content1 }) }
	
	render() {
		if (this.state.scales === null) {
			return (
				<div className="guitar-chords-track">
					<Loading />
				</div>
			)
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

				</div>
			)
		}
	}
}

export default GuitarScales