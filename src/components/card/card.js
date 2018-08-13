import React, { Component } from 'react'
import './card.scss'

class Card extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></img>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.</div>
                    <div className="tags">
                        <span className="tag">HTML</span>
                        <span className="tag">CSS</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;