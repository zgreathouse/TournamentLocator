import React from 'react';
import { Link } from 'react-router-dom';

const NewTournamentButton = ({ user }) => {
  if (user.finishAccountSetup) {
      return (
        <div className="create-tournament-link">
          <Link to="/tournaments/new">
            Create Tournament!
          </Link>
        </div>
    )
  }

  return <div></div>

}

export default NewTournamentButton;
