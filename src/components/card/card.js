import React from 'react'
import './card.scss'
import Img from 'gatsby-image'

export default (props) => (
    <div className="card">
        <div className="card-image">
            <figure className="image">
                <Img fluid={props.contentData.image.sizes} alt="project"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="content">
                <h4>{props.contentData.title}</h4>
                <p>{props.contentData.desc.internal.content}</p>
            </div>
            <div className="tags">
                {props.contentData.tags.map((tag,index) => {
                    return <span key={index} className="tag">{tag}</span>
                })}
            </div>
        </div>
    </div>
);