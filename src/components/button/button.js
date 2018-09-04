import React from 'react'

export default (props) => (
    <a href="mailto:boxton.da@gmail.com" className={`button is-${props.type} is-${props.shape} is-${props.size}`}><span>{props.children}</span></a>
);