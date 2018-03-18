import React from 'react';
import { Link } from 'react-router-dom';

const TournamentIndexItem = ({ tournament }) => {
  return (
    <button>
      <Link to={`/tournaments/${tournament._id}`}>
        <div>
          <h5>{tournament.title}</h5>
          <p>Game: {tournament.game}</p>
          <p>{tournament.date}</p>
        </div>
      </Link>
    </button>
  )
}

export default TournamentIndexItem;
