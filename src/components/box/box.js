import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './box.scss'

export default (props) => (
    <div className="box">
        <article className="media">
            <div className="media-content">
                <div className="content has-text-centered">
                    <FontAwesomeIcon icon={props.contentData.icon} size="2x" />
                    <h2 className="is-2">{props.contentData.title}</h2>
                    <p>{props.contentData.desc}</p>
                    <h4 className="is-4">{props.contentData.langTitle}</h4>
                    <p>{props.contentData.langList.join(', ')}</p>
                    <h4 className="is-4">{props.contentData.toolsTitle}</h4>
                    <p>{props.contentData.toolsList.join(', ')}</p>
                </div>
            </div>
        </article>
    </div>
);