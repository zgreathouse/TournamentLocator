import React from 'react';
import { Link } from 'react-router-dom';
import { convertToReadable } from '../../util/helperFunctions';

const TournamentIndexItem = ({ tournament }) => {
  return (
    <button style={{marginTop: "10px", height: "6.5em"}}>
      <Link to={`/tournaments/${tournament._id}`}>
        <div style={{color: "#403f42", width: "37.49em", height: "5em"}}>
          <h5 style={{textAlign: "left"}}>{tournament.title}</h5>
          <p className="left">Game: {convertToReadable(tournament.game)}</p>
          <p className="right">{tournament.date}</p>
        </div>
      </Link>
    </button>
  )
}

export default TournamentIndexItem;
