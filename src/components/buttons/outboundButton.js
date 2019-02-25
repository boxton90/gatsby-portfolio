import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import './button.scss'

export default (props) => (
    <OutboundLink href={props.href} target={props.target} rel="noopener noreferrer" className={`button is-${props.type} is-${props.shape} is-${props.border} is-${props.size}`}><span>{props.children}</span></OutboundLink>
);