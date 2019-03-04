import React from "react";
import Emoji from "../../components/emoji/emoji";
import HighlightedTitle from "../../components/highlightedTitle/highlightedTitle";
import { StaticQuery, graphql } from "gatsby";
import { doScrollIntoView } from '../../navigation/navigation'

export default () => (
  <StaticQuery
    query={graphql`
      query AnnouncementQuery {
        contentfulAnnouncement {
          title
          desc {
            desc
          }
          button {
            content
            emoji
          }
          show
        }
      }
    `}
    render={data => (
      <section data-aos="fade-up" className={`section has-text-centered is-section-up ${data.contentfulAnnouncement.show ? '' : 'is-hidden'}`}>
        <div className="container is-narrow">
          <div className="box">
            <div className="columns level">
              <div className="column level-item">
                <HighlightedTitle color="red">{data.contentfulAnnouncement.title}</HighlightedTitle>
                <p>{data.contentfulAnnouncement.show.toString}</p>
              </div>
              <div className="column level-item">
                <p>{data.contentfulAnnouncement.desc.desc}</p>
              </div>
              <div className="column level-item">
                <button className="button is-primary is-medium is-outlined" data-view="#contact" onClick={doScrollIntoView}>{data.contentfulAnnouncement.button.content} <Emoji emoji={data.contentfulAnnouncement.button.emoji} /></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);
