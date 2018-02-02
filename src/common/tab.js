import React from 'react'

import './tab.css'

class Tab extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			
		}
	}
	
	render() {
		return (
			<div id="tab">
				<div className="tab-inner">
				
					<div className="tab-horz"
					style={{ top: '0' }}></div>
					<div className="tab-horz"
						style={{ top: '16.6666667%' }}></div>
					<div className="tab-horz"
						style={{ top: '33.3333334%' }}></div>
					<div className="tab-horz"
						style={{ top: '50%' }}></div>
					<div className="tab-horz"
						style={{ top: '66.6666667%' }}></div>
					<div className="tab-horz"
						style={{ top: '83.3333334%' }}></div>
					<div className="tab-horz"
						style={{ top: '100%' }}></div>

					<div className="tab-vert"
						style={{ left: '%' }}></div>
					<div className="tab-vert"
						style={{ left: '25%' }}></div>
					<div className="tab-vert"
						style={{ left: '50%' }}></div>
					<div className="tab-vert"
						style={{ left: '75%' }}></div>
					<div className="tab-vert"
						style={{ left: '100%' }}></div>
					
				</div>
			</div>
		)
	}	
}

export default Tab