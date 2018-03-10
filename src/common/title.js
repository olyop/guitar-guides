import React from 'react'

import './title.css'

const Title = props => (
  <div className="title">
    <div className="title-inner">
      {props.children}
    </div>
  </div>
)

export default Title