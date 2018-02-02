import React from 'react';

const TournamentIndexItem = ({ tournament }) => {
  return (
    <button style={{marginTop: "30px"}}>
      <div style={{color: "#403f42", width: "37.49em", height: "6em"}}>
        <h5 style={{textAlign: "left"}}>{tournament.title}</h5>
        <p className="left">Game: {tournament.game}</p>
        <p className="right">{tournament.date}</p>
      </div>
    </button>
  )
}

export default TournamentIndexItem;
