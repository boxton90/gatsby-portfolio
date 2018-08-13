import React, { Component } from 'react'
import Card from '../../components/card/card'

class Work extends Component {
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
              <Card></Card>
            </div>
            <div className="column is-one-third">
              <Card></Card>
            </div>
            <div className="column is-one-third">
              <Card></Card>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default Work;