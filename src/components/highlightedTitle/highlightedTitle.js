import React from 'react'
import './highlightedTitle.scss'

export default (props) => (
    <h1 data-aos="zoom-in" className="title"><span className={`shadow is-${props.color}`}>{props.children}</span></h1>
);