import React, { Component } from 'react'
import Card from '../../components/card/card'
import emiratesImg from "../../assets/emirates.jpg"
import angularImg from "../../assets/angular.png"
import ucoImg from "../../assets/uco.jpg"


class Work extends Component {

  constructor(props) {
    super(props);
    this.emiratesProjectInfo = {
      imgPath: emiratesImg,
      title: 'Emirates Web Application',
      desc: `Currently working as Front-End developer on Emirates Mobile
      Web Application being part of development and improvement of UI & UX
      through HTML/CSS and JS technologies.
    `,
      tagsList: ['HTML', 'CSS', 'JS']
    }

    this.AngularProjectInfo = {
      imgPath: angularImg,
      title: 'Trip Sorter Web App',
      desc: `Web application developed with support of Angular CLI
      and Bulma CSS that simulated a trip search engine application.
    `,
      tagsList: ['HTML', 'CSS', 'BULMA', 'TYPESCRIPT']
    }

    this.ucoProjectInfo = {
      imgPath: ucoImg,
      title: 'Java Applet',
      desc: `
      Complete development of a Java Applet for the Statistical Department of the
      University of Cordoba related to linear regression and correlation concepts.
    `,
      tagsList: ['JAVA']
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Latest work</h1>
          <div className="columns">
            <div className="column is-one-third">
              <p>American bobtail tiger but bengal sphynx egyptian mau or burmese lion.
                Devonshire rex. Puma ragdoll, and mouser yet panther bombay yet malkin for panther.
                Kitten. Kitten norwegian forest for tom for grimalkin so puma so siberian.
                Russian blue russian blue scottish fold for kitten. Devonshire rex grimalkin. Cheetah kitten.
                Jaguar tom for russian blue lynx. Puma cornish rex so egyptian mau and jaguar so mouser.
                Havana brown thai for devonshire rex birman yet bobcat or balinese.
              </p>
            </div>
            <div className="column is-one-third">
              <Card contentData={this.emiratesProjectInfo}></Card>
            </div>
            <div className="column is-one-third">
              <Card contentData={this.AngularProjectInfo}></Card>
            </div>
            <div className="column is-one-third">
              <Card contentData={this.ucoProjectInfo}></Card>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Work;