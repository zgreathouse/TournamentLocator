import React from 'react';

const TournamentIndexItem = ({ tournament }) => {
  return (
    <div className="list-group-item">
      {tournament.title}
    </div>
  )
}

export default TournamentIndexItem;
