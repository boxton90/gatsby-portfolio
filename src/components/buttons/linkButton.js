import React from 'react'
import { Link } from 'gatsby'
import './button.scss'

export default (props) => (
    <Link to={props.to} className={`button is-${props.type} is-${props.shape} is-${props.size} is-${props.border}`}>{props.children}</Link>
)