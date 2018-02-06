import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class TournamentIndexItem extends Component {

  render() {
    const { tournament } = this.props;

    return (
      <button style={{marginTop: "10px"}}>
        <Link to={`/tournaments/${tournament._id}`}>
          <div style={{color: "#403f42", width: "37.49em", height: "5em"}}>
            <h5 style={{textAlign: "left"}}>{tournament.title}</h5>
            <p className="left">Game: {tournament.game}</p>
            <p className="right">{tournament.date}</p>
          </div>
        </Link>
      </button>
    )
  }
}

export default TournamentIndexItem;
