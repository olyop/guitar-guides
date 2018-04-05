import React from 'react'

import './css/sad-face.css'

class SadFace extends React.Component {
	constructor(props) {
    super(props)
		this.state = {
			secondsElapsed: 0
		}
  }
  tick() { this.setState({ secondsElapsed: this.state.secondsElapsed + 1 }) }
  componentDidMount() { this.interval = setInterval(this.tick.bind(this),500) }
  componentWillUnmount() { clearInterval(this.interval) }
  render() {
    return (
      <div className="sad-face">
				<i className="material-icons">
					{this.state.secondsElapsed % 2 === 0 ? 'mood_bad' : 'mood'}
				</i>
				<h5>{this.props.children}</h5>
			</div>
    )
  }
}

export default SadFace