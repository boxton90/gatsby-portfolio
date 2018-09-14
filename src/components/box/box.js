import React from 'react'
import Emoji from '../../components/emoji/emoji'
import './box.scss'

export default (props) => (
    <div className="box">
        <article className="media">
            <div className="media-content">
                <div className="content has-text-centered">
                    <Emoji emoji={props.contentData.emoji} size="2.5"/>
                    <h2 className="is-2">{props.contentData.title}</h2>
                    <p>{props.contentData.desc.internal.content}</p>
                    {props.contentData.skillList.map(((e,index) => {
                        return(
                            <div key={index} className="section">
                                <h4 className="is-4">{e.title}</h4>
                                <div className="tags is-centered">
                                    {e.items.map((item,index)=>{
                                        return <span key={index} className="tag">{item}</span> 
                                    })}
                                </div>
                            </div>
                        );
                    }))}
                </div>
            </div>
        </article>
    </div>
);