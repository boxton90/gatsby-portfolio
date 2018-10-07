import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import './socialButton.scss'

export default (props) => (
    <OutboundLink href={props.href} target="_blank" rel="noopener noreferrer" className={`button ${(props.fabIcon)}`}>
        <span className="icon"><FontAwesomeIcon icon={['fab', props.fabIcon]} size="1x" /></span>
        <span>{props.children}</span>
    </OutboundLink>
);