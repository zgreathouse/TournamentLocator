import React from 'react';

const TournamentIndexItem = ({ tournament }) => {
  return (
    <div>
      <h5 style={{marginLeft: "20px"}}>{tournament.title}</h5>
      <p style={{marginLeft: "50px"}}>Game: {tournament.game}</p>
      <p style={{marginLeft: "50px"}}>Description: {tournament.description}</p>
    </div>
  )
}

export default TournamentIndexItem;
