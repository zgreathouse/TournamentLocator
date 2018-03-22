//a button which navigates the user to the tournament form page
import React from 'react';
import { Link } from 'react-router-dom';

const NewTournamentButton = () => {
  return (
    <div>
      <Link to="/tournaments/new">
        <button className="create-tournament-button">
          Create Tournament!
        </button>
      </Link>
    </div>
  )
}

export default NewTournamentButton;
