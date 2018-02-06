import React, { Component } from 'react';

class TournamentDetail extends Component {
  render() {
    const tournament = this.props.tournament;

    return (
      <div style={{
        margin: "40px",
        padding: "20px",
        border: "solid black 1px",
        boxShadow : "0 0 5px 0 grey, 0 0 5px 0 grey"
      }}>
        <h5>{tournament.title}</h5>
        <div>Game: {tournament.game}</div>
        <div>Date: {tournament.date}</div>
        <div>Description: {tournament.description}</div>
      </div>
    )
  }
}

export default TournamentDetail;
