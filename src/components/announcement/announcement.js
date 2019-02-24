import React from "react";
import Button from "../../components/buttons/button";
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
      <section data-aos="fade-up" className={`section has-text-centered is-section-up ${data.contentfulAnnouncement.show ? null : 'is-hidden'}`}>
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
                <Button href="mailto:boxton.da@gmail.com" type="primary" shape="rounded" size="medium">{data.contentfulAnnouncement.button.content} <Emoji emoji={data.contentfulAnnouncement.button.emoji} /></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  />
);
