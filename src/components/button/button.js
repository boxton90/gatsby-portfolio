import React from 'react'

export default (props) => (
    <a href={props.href} target={props.target} rel="noopener noreferrer" className={`button is-${props.type} is-${props.shape} is-${props.size}`}><span>{props.children}</span></a>
);