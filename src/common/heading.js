import React from 'react'

import './heading.css'

const Heading = props => (
  <div onClick={props.onClick}
    className="heading">
    <h1>{props.title}</h1>
    <i className="material-icons">{props.active ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</i>
  </div>
)

export default Heading