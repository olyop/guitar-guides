import React from 'react'

import './guitar-tab.css'

class GuitarTab extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			
		}
	}
	
	render() {
		return (
			<div id="guitar-tab">
				<div className="guitar-tab-inner">
				
					<div className="guitar-tab-horz"
						style={{ top: '0' }} />
					<div className="guitar-tab-horz"
						style={{ top: '30px' }} />
					<div className="guitar-tab-horz"
						style={{ top: '60px' }} />
					<div className="guitar-tab-horz"
						style={{ top: '90px' }} />
					<div className="guitar-tab-horz"
						style={{ top: '120px' }} />
					<div className="guitar-tab-horz"
						style={{ top: '149px' }} />
					
					<div className="guitar-tab-note"
						style={{ left: '10px', top: '10px' }}>
						<p>12</p>
					</div>
					<div className="guitar-tab-note"
						style={{ left: '45px', top: '20px' }}>
						<p>12</p>
					</div>
					<div className="guitar-tab-note"
						style={{ left: '80px', top: '30px' }}>
						<p>12</p>
					</div>
					<div className="guitar-tab-note"
						style={{ left: '115px', top: '40px' }}>
						<p>12</p>
					</div>
					<div className="guitar-tab-note"
						style={{ left: '150px', top: '50px' }}>
						<p>12</p>
					</div>
					<div className="guitar-tab-note"
						style={{ left: '185px', top: '60px' }}>
						<p>12</p>
					</div>
					<div className="guitar-tab-note"
						style={{ left: '210px', top: '70px' }}>
						<p>12</p>
					</div>
					<div className="guitar-tab-note"
						style={{ left: '245px', top: '80px' }}>
						<p>12</p>
					</div>
					<div className="guitar-tab-note"
						style={{ left: '280px', top: '90px' }}>
						<p>12</p>
					</div>
					<div className="guitar-tab-note"
						style={{ left: '315px', top: '100px' }}>
						<p>12</p>
					</div>
					
				</div>
			</div>
		)
	}	
}

export default GuitarTab