import React from 'react';
import { Link } from 'react-router-dom';
import { extractDate } from '../../util/helperFunctions';
import 'font-awesome/css/font-awesome.min.css';

const TournamentIndexItem = ({ tournament }) => {
  let date;

  if (tournament.series) {
    date = tournament.seriesDay + 's!'
  } else {
    date = extractDate(tournament.startTime);
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
              {tournament.series ? <i className="fa fa-trophy"></i> : <i></i>}
              <p className="item-detail-info-date">{date}</p>
            </div>
        </div>
      </Link>
    </div>
  )
}

export default TournamentIndexItem;
