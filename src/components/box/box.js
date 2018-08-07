import React, { Component } from 'react'

class Box extends Component {
    render() {
        return (
            <div>
                <div className="box">
                    <article className="media">
                        <div className="media-content">
                            <div className="content has-text-centered">
                                <h2 className="subtitle">Title</h2>
                                <p>card</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default Box;