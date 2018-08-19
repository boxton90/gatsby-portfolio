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
                    <div className="tags is-centered">
                        {props.contentData.langList.map((lang, index) => {
                            return <span key={index} className="tag">{lang}</span>
                        })}
                    </div>
                    <h4 className="is-4">{props.contentData.toolsTitle}</h4>
                    <div className="tags is-centered">
                        {props.contentData.toolsList.map((tool, index) => {
                            return <span key={index} className="tag">{tool}</span>
                        })}
                    </div>
                </div>
            </div>
        </article>
    </div>
);