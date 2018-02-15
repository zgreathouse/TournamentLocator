import React from 'react';
import { Link } from 'react-router-dom';

const NewTournamentButton = () => {
  return (
    <div>
      <Link to="/tournaments/new" className="btn btn-primary right" style={{marginTop: "15px"}}>
        Create Tournament
      </Link>
    </div>
  )
}

export default NewTournamentButton;
