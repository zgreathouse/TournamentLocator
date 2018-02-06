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
        <div style={{margin: "10px"}}>
          <div>Game: {tournament.game}</div>
          <div>Tags: {tournament.tags}</div>
        </div>

        <div style={{margin: "10px"}}>
          <div>Stream: {tournament.streamLink}</div>
          <div>Twitter: {tournament.twitterLink}</div>
        </div>

        <div style={{margin: "10px"}}>
          <div>Date: {tournament.date}</div>
        </div>

        <div style={{margin: "10px"}}>
          <div>Description: {tournament.description}</div>
        </div>

      </div>
    )
  }
}

export default TournamentDetail;
