import React from 'react';
import { Link } from 'react-router-dom';
import { extractDate } from '../../util/helperFunctions';

const TournamentIndexItem = ({ tournament }) => {
  const date = extractDate(tournament.startTime);

  return (
    <div className="tournament-list-item">
      <Link to={`/tournaments/${tournament._id}`}>
        <h3 className="tournament-list-item-title">{tournament.title}</h3>
        <div className="item-detail">
            <div className="item-detail-banner"></div>
            <div className="item-detail-info">
              <p>{tournament.game}</p>
              <p>{date}</p>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default TournamentIndexItem;
