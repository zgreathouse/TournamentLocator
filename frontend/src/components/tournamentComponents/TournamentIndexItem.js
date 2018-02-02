import React, { Component } from 'react';

class TournamentIndexItem extends Component {

  render() {
    const { tournament } = this.props;

    return (
      <button style={{marginTop: "10px"}}>
        <div style={{color: "#403f42", width: "37.49em", height: "5em"}}>
          <h5 style={{textAlign: "left"}}>{tournament.title}</h5>
          <p className="left">Game: {tournament.game}</p>
          <p className="right">{tournament.date}</p>
        </div>
      </button>
    )
  }
}

export default TournamentIndexItem;
