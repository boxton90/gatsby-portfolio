import React from 'react';

export default (props) => {
    return (<span role="img" aria-label={props.ariaLabel}>{props.emoji}</span>);
}