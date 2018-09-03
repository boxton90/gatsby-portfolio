import React from 'react'

export default (props) => (
    <a className={`button is-${props.type} is-${props.shape} is-${props.size}`}><span>{props.children}</span></a>
);