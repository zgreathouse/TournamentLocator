import React from 'react';
import { Link } from 'react-router-dom';
import { extractDate } from '../../util/helperFunctions';

const TournamentIndexItem = ({ tournament }) => {
  const date = extractDate(tournament.startTime);

  return (
    <div>
      <Link to={`/tournaments/${tournament._id}`}>
        <div className="tournament-list-item">
          <h5>{tournament.title}</h5>
          <p>Game: {tournament.game}</p>
          <p>{date}</p>
        </div>
      </Link>
    </div>
  )
}

export default TournamentIndexItem;
