//a button which navigates the user to the tournament form page
import React from 'react';
import { Link } from 'react-router-dom';

const NewTournamentButton = () => {
  return (
    <div>
      <Link to="/tournaments/new">
        Create Tournament!
      </Link>
    </div>
  )
}

export default NewTournamentButton;
