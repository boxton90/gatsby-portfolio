import React, { Component } from 'react'
import './card.scss'

export default (props) => (
    <div className="card">
        <div className="card-image">
            <figure className="image is-16by9">
                <img src={props.contentData.imgPath} alt="Placeholder image"></img>
            </figure>
        </div>
        <div className="card-content">
            <div className="content">
                <h4>{props.contentData.title}</h4>
                <p>{props.contentData.desc}</p>
            </div>
            <div className="tags">
                {props.contentData.tagsList.map(tag => {
                    return <span className="tag">{tag}</span>
                })}
            </div>
        </div>
    </div>
);