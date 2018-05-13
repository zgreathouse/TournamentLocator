import React from 'react';
import { Link } from 'react-router-dom';
import { extractDate } from '../../util/helperFunctions';

const TournamentIndexItem = ({ tournament }) => {
  let date;

  if (tournament.series) {
    date = tournament.seriesDay + 's!'
    console.log('1');
  } else {
    date = extractDate(tournament.startTime);
    console.log('2');
  }
  
  return (
    <div className="tournament-list-item">
      <Link to={`/tournaments/${tournament._id}`}>
        <h3 className="tournament-list-item-title">
          {tournament.title}
        </h3>
        <div className="item-detail">
            <div className="item-detail-banner"></div>
            <div className="item-detail-info">
              <p>{tournament.game}</p>
              <p className="item-detail-info-date">{date}</p>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default TournamentIndexItem;
