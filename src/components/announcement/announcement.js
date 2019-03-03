import React from "react";
import OutboundButton from "../../components/buttons/outboundButton";
import Emoji from "../../components/emoji/emoji";
import HighlightedTitle from "../../components/highlightedTitle/highlightedTitle";
import { StaticQuery, graphql } from "gatsby";



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
                <OutboundButton href="mailto:boxton.da@gmail.com" type="primary" size="medium" border="outlined">{data.contentfulAnnouncement.button.content} <Emoji emoji={data.contentfulAnnouncement.button.emoji} /></OutboundButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);
