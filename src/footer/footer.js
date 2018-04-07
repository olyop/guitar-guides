import React from 'react'

import './footer.css'

const Footer = props => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-s-12">
						<h5>Guitar Guides</h5>
						<p>A guitar and bass learning app.</p>
					</div>
					<div className="col-lg-4 col-s-12">
						<h5>Links</h5>
						<ul className="footer-links-list">
							<li>
								<a href="https://github.com/olyop/guitar-guides/blob/master/README.md"
									target="_blank" rel="noopener noreferrer">About</a>
							</li>
							<li>
								<a href="https://github.com/olyop/guitar-guides/"
									target="_blank" rel="noopener noreferrer">Github Page</a>
							</li>
							<li>
								<a href="https://github.com/olyop/guitar-guides/issues"
									target="_blank" rel="noopener noreferrer">Send Feedback</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="footer-bottom">
					<p>© 2017 Copyright</p>
					<p>Oliver Plummer</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer